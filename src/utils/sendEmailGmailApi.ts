// https://developers.google.com/gmail/api/quickstart/nodejs

import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");

const http = require("http");
const url_1 = require("url");
const opn = require("open");
const destroyer = require("server-destroy");

// If modifying these scopes, delete token.json.
const SCOPES = [
  "https://mail.google.com/",
  "https://www.googleapis.com/auth/gmail.modify",
  "https://www.googleapis.com/auth/gmail.compose",
  "https://www.googleapis.com/auth/gmail.send",
];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
// const TOKEN_PATH = path.join(__dirname, "./token.json");

const sendEmailGmailApi = async (body: any, sender: string) => {

    // console.log(`__dirname ${__dirname}`);
//   var TOKEN_PATH = "./credentials.json";
  var Gmail_ClientID = serverRuntimeConfig.gmailclientid;
  var Gmail_ClientSecret = serverRuntimeConfig.gmailclientsecret;
  var Gmail_Port = serverRuntimeConfig.gmailport || "3000";

    console.log("Gmail_ClientID", Gmail_ClientID);
    console.log("Gmail_ClientSecret", Gmail_ClientSecret);
    console.log("Gmail_Port", Gmail_Port);
    // TOKEN_PATH = path.join(__dirname, "./gmailcontacttoken.json");
    // Gmail_ClientID = process.env.Gmail_Contact_ClientID;
    // Gmail_ClientSecret = process.env.Gmail_Contact_ClientSecret;
    // Gmail_Port = process.env.Gmail_Contact_Port || "3002";

  // Load client secrets from a local file.
  const { client_id, client_secret, redirect_uris } = {
    client_id: Gmail_ClientID,
    client_secret: Gmail_ClientSecret,
    redirect_uris: [`http://localhost:${Gmail_Port}/oauth2callback`],
  };

  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  var isSent = true;
  const TOKEN_PATH=`${serverRuntimeConfig.srcpath}/utils/credentials.json`;
  try {
    const token = fs.readFileSync(TOKEN_PATH);
    await oAuth2Client.setCredentials(JSON.parse(token));
    isSent = await listLabels(oAuth2Client, body, sender);
  } catch (err) {
    await getNewToken(oAuth2Client, body, sender, TOKEN_PATH, Gmail_Port);
  }

  return isSent;
};

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
async function getNewToken(
  oAuth2Client: any,
  body: any,
  sender: string,
  TOKEN_PATH: string,
  Gmail_Port: string
) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return new Promise((resolve, reject) => {
    const server = http
      .createServer(async (req: any, res: any) => {
        try {
          if (req.url.indexOf("/oauth2callback") > -1) {
            // const qs = new url_1.URL(req.url, "http://localhost:3000").searchParams;
            const qs = new url_1.URL(req.url, "http://localhost").searchParams;
            res.end("Authentication successful! Please return to the console.");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            server.destroy();
            const { tokens } = await oAuth2Client.getToken(qs.get("code"));
            oAuth2Client.credentials = tokens;

            oAuth2Client.setCredentials(tokens);
            fs.writeFile(TOKEN_PATH, JSON.stringify(tokens), (err: any) => {
              if (err) return console.error(err);
              console.log("Token stored to", TOKEN_PATH);
            });
            await listLabels(oAuth2Client, body, sender);

            resolve(oAuth2Client);
          }
        } catch (e) {
          reject(e);
        }
      })
      .listen(Gmail_Port, () => {
        // open the browser to the authorize url to start the workflow
        opn(authUrl, { wait: false }).then((cp: any) => cp.unref());
      });
    destroyer(server);
  });
}

/**
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
async function listLabels(auth: any, body: any, sender: string) {
  const gmail = google.gmail({ version: "v1", auth });

  const subject = body.subject; //"🤘 Hello 🤘";
  const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString("base64")}?=`;
  // const fromEmail =
  // sender === emailSender.CONTACT
  //   ? "contact" + process.env.DOMAIN + "@gmail.com"
  //   : process.env.DOMAIN + "@gmail.com";
  const fromEmail = "fasttrackrealtor@gmail.com";
  const messageParts = [
    `From: Fast Track <${fromEmail}>`,
    `To: <${body.to}>`, // "To: Zhi Jiang <jiangzhi08@gmail.com>",
    "Content-Type: text/html; charset=utf-8",
    "MIME-Version: 1.0",
    `Subject: ${utf8Subject}`,
    "",
    body.html,
    // "This is a message just to say hello.",
    // "So... <b>Hello!</b>  🤘❤️😎",
  ];
  const message = messageParts.join("\n");

  // The body needs to be base64url encoded.
  const encodedMessage = Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  var isSent = true;
  const res = await gmail.users.messages
    .send({
      userId: "me",
      requestBody: {
        raw: encodedMessage,
      },
    })
    .then(() => {
      console.log(
        "ByGmail " +
          sender +
          ": " +
          body.to +
          ", agencyid=" +
          body.agencyid +
          ", emailcount=" +
          body.emailcount
      );
    })
    .catch((err: any) => {
      if (
        err.response.error_description ===
        "Token has been expired or revoked."
      ) {
        throw "Token has been expired or revoked.";
      } else {
        // logger.error(JSON.stringify(err, null, 2));
        console.log("GmailApi failed: " + body.to);
        isSent = false;
      }
    });
  return isSent;
}

export default sendEmailGmailApi;