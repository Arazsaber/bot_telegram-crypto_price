const TelegramBot = require('node-telegram-bot-api');

const token = '6392138435:AAEWxZ16xcIP4jXTXH4SLrB8_jk5LVbZrQ0'; // Replace with your own bot token
const bot = new TelegramBot(token, { polling: true });
const axios=require('axios')


bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;
    if(messageText=='/start'){
        bot.sendMessage(chatId,`Welcome to the bot!
send the logo of crypto for price
    /AAVE,/ADA,/AXS,/BCH,/BNB,/BTC,/DAI,/DOGE,/DOT,/EOS,/ETC,/ETH,/FTM,/LINK,/LTC,/MANA,/MATIC,/PMN,/SAND,/SAND,/SHIB,/SOL,/TRX,/UNI,/XLM,/XRP`);
    }
    let usdt=0   
    axios.get(`https://api.nobitex.ir/v2/orderbook/USDTIRT`)
    .then((res)=>{
        usdt=res.data.lastTradePrice
    })
    axios.get(`https://api.nobitex.ir/v2/orderbook/${messageText}USDT`)
    .then((res)=>{
        let price=res.data.lastTradePrice
        bot.sendMessage(chatId,`${messageText} price is: ${price}$
        USDT: ${usdt} IR`);
    })
  });