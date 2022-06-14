/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    googemail: process.env.GOOGMail,
    googemailpassword: process.env.GOOGMailPassword,
    gmailclientid: process.env.Gmail_ClientID,
    gmailclientsecret: process.env.Gmail_ClientSecret,
    gmailport: process.env.Gmail_Port,
    adminemail: process.env.ADMIN_EMAIL,
    srcpath: process.env.SRC_PATH,
  },
  publicRuntimeConfig: {
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
      path: false,
    };

    return config;
  },
}

module.exports = nextConfig
