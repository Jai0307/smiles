// import logger from "./logger";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = serverRuntimeConfig.sib_apikey;

export const SendEmailSIB = (toEmailAddress: string,
    subject: string,
    message: string,attachmentname?:string, attachment?:any) => {

    var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

    sendSmtpEmail = {
        sender:{
            name:'Happy Hearts',
            email:'jai.singh3705@gmail.com'
        },
        to: [{
            email: toEmailAddress,
        }],
        subject: subject,
        htmlContent:message,
        headers: {
            'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
        },
        // attachment: attachmentname?[{
        //     content: attachment,
        //     name: attachmentname
        // }]:[]
    };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data: any) {
        console.log('SIB email sent successfully. Returned data: ' + JSON.stringify(data));
        // logger.info('SIB email sent successfully. Returned data: ' + JSON.stringify(data));
    }, function(error: any) {
        console.log(`SIB error failed to send email ${error}`);
    });
}