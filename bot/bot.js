// Requires Telegraf, which is the top SDK for Telegram bots
// Don't forget to get a new bot / bot token via @BotFather on Telegram
const { Telegraf } = require("telegraf");
const TOKEN = 'YOUR_BOT_TOKEN_HERE';
const bot = new Telegraf(TOKEN);

// A link to the mini-app you've set up via @BotFather when creating the app
const web_link = 'https://t.me/FlipnoteBot/note';

// Make the bot that hosts your mini-app reply with a message on /start and put a link to the mini-app
bot.start((ctx) => ctx.reply('Ready to take some notes?', {
    reply_markup: {
        inline_keyboard:[ [ {text:'Open Flipnote', url: web_link}]]
    },
}) )

bot.launch();