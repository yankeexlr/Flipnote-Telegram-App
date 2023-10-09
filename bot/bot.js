const { Telegraf } = require("telegraf");
const TOKEN = 'YOUR_BOT_TOKEN_HERE';
const bot = new Telegraf(TOKEN);


const web_link = 'https://t.me/FlipnoteBot/note';

bot.start((ctx) => ctx.reply('Welcome', {
    reply_markup: {
        inline_keyboard:[ [ {text:'webapp', url: web_link}]]
    },
}) )

bot.launch();