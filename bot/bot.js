const { Telegraf } = require("telegraf");
const TOKEN = '6447815073:AAG7RGNkWzd2zDz-_8bHjESjfB7H3iXF5I4';
const bot = new Telegraf(TOKEN);

const web_link = '';

bot.start((cctx) => cctx.reply('Welcome', {
    reply_markup: {
        keyboard:[ [ {text:'webapp', url: 'https://t.me/FlipnoteBot/note'}]]
    },
}) )

bot.launch();