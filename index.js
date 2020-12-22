const TelegranBot = require('node-telegram-bot-api');
const token = '1421900656:AAHLc1jQj-2XlPvg6j_m2ivXmTXk_-yrc3U';
const bot = new  TelegranBot(token, {polling: true});
const dialogflow = require('./dialogflow');


bot.on('message', async function (msg){
    const  chatId =  msg.chat.id;
    console.log(msg.text);
    
    const defResponse = await dialogflow.sendMessage(chatId, msg.text)

    bot.sendMessage(chatId, dfResponse.text );
});