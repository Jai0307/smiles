import React from "react";
import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
import { formatDate } from "utils/format";

export default function Sitemap() {}

const ReadManifestFile = (basePath: string): object => {
  const routes_manifest_path = path.join(basePath + '/.next/server/pages-manifest.json');

  // Read from the file
  if (fs.existsSync(routes_manifest_path)) {
    const raw_json = fs.readFileSync(routes_manifest_path);
    return JSON.parse(raw_json.toString());
  } else return new Object();
};

const isNextInternalUrl = (path: string): boolean => {
  return new RegExp(/[^\/]*^.[_]|(?:\[)/g).test(path);
}

const GetPathsFromManifest = (manifest: any, basePath: string, host: string): Array<Url> => {
  let routes: Array<string> = [];

  for (let [route, file] of Object.entries(manifest)) {
    if (!isNextInternalUrl(route)) {
      // Add static paths
      routes = routes.concat(route);
    } 
  }

  let sitemapUrls: Array<Url> = [];
  routes.forEach((route) => {
    sitemapUrls.push({ host: host, route: route });
  });

  return sitemapUrls;
};

const GetPathsFromBuildFolder = (dir: string, urlList: Array<Url>, host: string, basePath: string): Array<Url> => {
  const files: string[] = fs.readdirSync(dir);
  urlList = urlList || [];

  files.forEach((file) => {
    if (fs.statSync(dir + file).isDirectory()) {
      urlList = GetPathsFromBuildFolder(dir + file + '/', urlList, host, basePath);
    } else {
      if (path.extname(file) == '.json') {
        let route = path.join(dir + file.substring(0, file.length - 5));
        route = route.replace(basePath, '/');
        urlList.push({ host: host, route: route });
      }
    }
  });

  return urlList;
};

const GetUrlElement = ({ host, route, date }: Url): string => {
  if (date) {
    return `<url>
      <loc>${host}${route}</loc>
      <changefreq>weekly</changefreq>
      <lastmod>${date}</lastmod>
      </url>`;
  } else{
    let dt = new Date();
    let datedt = formatDate(new Date(dt.getFullYear(), dt.getMonth(), 1), 'Y-M-d')
    return `<url>
    <loc>${host}${route}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${datedt}</lastmod>
    </url>`;
  }
};
const GetSitemapXml = (urls: Array<Url>): string => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((url) => GetUrlElement(url)).join('')}
    </urlset>`;

type Url = {
  host: string;
  route: string;
  date?: Date;
};

const excludedRoutes: Array<string> = ['/sitemap.xml', '/404', '.js', '_document', '_app'];

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const basePath: string = process.cwd();
  const routes_manifest: object = ReadManifestFile(basePath);
  const host: string = "https://happyhearts.com"

  let routes: Array<Url> = GetPathsFromManifest(routes_manifest, basePath, host);
  const pagesPath = path.join(basePath + '/.next/server/pages/');
  routes = routes.concat(GetPathsFromBuildFolder(pagesPath, [], host, pagesPath));

  routes = routes.filter((el) => !excludedRoutes.includes(el.route));
  const finalroutes = new Array<Url>();
    for(let i=0; i<routes.length; i++){
      let exclude = false;
      for(let j=0; j<excludedRoutes.length; j++){
        if(routes[i].route.toString().includes(excludedRoutes[j]))
        {
          exclude = true;
          break;
        }
      }
      if(!exclude){
        finalroutes.push(routes[i]);
      }
    }

  const sitemap: string = GetSitemapXml(finalroutes);
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return { props: {} };
};