// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sendEmailGmailApi from 'utils/sendEmailGmailApi';
import { SendEmailSIB } from 'utils/sendInBlue';
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

export default async function handler( req: NextApiRequest, res: NextApiResponse){

    const adminemail = serverRuntimeConfig.adminemail;
    const googemail = serverRuntimeConfig.googemail;
    const message = `From: ${req.body.name}<br/> email: ${req.body.email} <br/> message: ${req.body.message}`;

    await SendEmailSIB( adminemail, `Happy Hearts contact email` ,message);
    return res.status(200).json({status:200, msg:"Email sent."});
}
