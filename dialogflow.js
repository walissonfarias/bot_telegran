const dialogflow = require('dialogflow');
const configs = require('./walisson-bot-fit');

const sessionClient = new dialogflow.SessionsClient({
    projectId: configs.project_id,
    credentials: {
        private_key: configs.private_key,
        client_email: configs.client_email
    }
});
//try {
async function sendMessage(chatId, message){
    const sessionPath = sessionClient.sessionPath(configs.project_id, chatId);
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: 'pt-BR'
            }
        }
    }
    const response = await sessionClient.detectIntent(request);    
    const result = response[0].queryResult;
    return {
        text: result.fulfillmentText,
        intent: result.intent.displayName,
        fields: result.parameters.fields
    };
};  
sendMessage('12938123', 'oi');

module.exports.sendMessage  = sendMessage;
//}catch (error) {
  //  console.log('error', error);
    // Do whatever you want, throw the error again if you want but it will just produce `UnhandledPromiseRejectionWarning` again, if you throw it again.
//}



