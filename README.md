# Flipnote-Telegram-App

![Flipnote](https://i.imgur.com/xti9I53.png)

**Intro**

A simple web app for taking notes, built to run on Telegram's web app platform (also called [tApps or TWA](https://docs.twa.dev/docs/introduction/about-platform")).<br>
This repo could be helpful for you to learn the tApp basics, as well as play with the build.

[View Demo](https://t.me/FlipnoteBot)

In case you wish to dig deeper into the code, **we've added plenty of useful comments and tricks to the code**.<br> They are featured in the **index.html**, **styles.css**, and **index.js** files of the web_app folder.<br> Especially meaningful for FE devs and designers willing to adopt the look to the user's Telegram client theme.

The repository consists of two instances: the 'bot' and 'web_app':

*bot:*<br>
The first is needed to maintain the bot upon which the web app will be hosted.<br> It serves as an event listener to the Telegram bot that will host the web app. All it pretty much does is respond on /start with a button that opens the web app.

*web_app:*<br>
The app itself is a minimalistic Express.js-based instance that lets us process the key mechanics of taking notes.<br> It consists of a single index.html file, a .js file containing the scripts, and a communication route with the database via Ajax.

**Installation, Mini-App**

The app by itself is meant to be deployed by the users for personal use, creating forks, and tweaks.<br>
Here's the full yet short flow to create your own fork of Flipnote...

First, clone the repository to whichever folder.<br>
```gh repo clone yankeexlr/Flipnote-Telegram-App```

Then navigate to the folder with the repository cloned.<br>
```cd /Flipnote-Telegram-App```

First, we need to make sure the web app runs smoothly. Navigate to the web_app instance.<br>
```cd /web_app```

Install dependencies.<br>
```npm i```

And run it with a single command.<br>
```node server.js```

If you're deploying on a server, you can use the server IP or domain it points to as the *app link* later.<br>
In case you're running the build locally, remember your localhost port and deploy it on [ngrok](https://www.youtube.com/watch?v=DCxt9SAnkyc&ab_channel=Pentacode), for example. Once deployed, get the ngrok subdomain link to feed to the bot later in the sequence.<br>


**Installation, Bot + Connect to the App**

Now get one level back in the folder – to the folder the repository was installed in. You can do so by ```cd ..```

Next, navigate to the folder with the bot.<br>
```cd /bot```

In **bot.js**, don't forget to change the TOKEN and web_link consts to your bot access token and your mini-app link.<br>
Both of these things you will get via [@BotFather](https://t.me/BotFather) on Telegram when (a) creating a bot and (b) creating a mini-app.<br>
Upon creating a mini-app, go back to /myapps, select the mini-app you've just created, and *Edit Web App URL* to the web link of your mini-app.<br>
It will let Telegram know where to read/source your app from.

**Important:** mini-app link is the one you've set via BotFather, e.g. t.me/Flipnote/note. Set it in the bot.js on the corresponding const.<br>
The web app URL you'll set via BotFather is the actual link on the web where your web app is reachable.<br>

Install dependencies.<br>
```npm i```

Now let's run the bot instance.<br>
```node bot.js```

At this point, you can navigate to your bot on Telegram, hit */start*, and press the *Open App* button – the rest is yours!

