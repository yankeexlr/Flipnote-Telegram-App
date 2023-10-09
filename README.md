# Flipnote-Telegram-App
**Intro**

A simple web app for taking notes, built to run on Telegram's web app platform (also called [tApps or TWA](https://docs.twa.dev/docs/introduction/about-platform")).
This repo could be helpful for you to learn the tApp basics, as well as play with the build.

**!** In case you wish to dig deeper into the code, we've added plenty of useful comments and tricks when working with TWA SDK. They are featured in the index.html, styles.css, and index.js files of the web_app folder.

The repository consists of two instances: the 'bot' and 'web_app':

*bot:*
The first is needed to maintain the bot upon which the web app will be hosted. It serves as an event listener to the Telegram bot that will host the web app. All it pretty much does is respond on /start with a button that opens the web app.

*web_app:*
The app itself is a minimalistic Express.js-based instance that lets us process the key mechanics of taking notes. It consists of a single index.html file, a .js file containing the scripts, and a communication route with the database via Ajax.

**Installation**

Here's the full yet short flow to create your own fork of Flipnote...

```gh repo clone yankeexlr/Flipnote-Telegram-App```
```cd /Flipnote-Telegram-App```
```cd /bot```
```npm i```
```node bot.js```
```cd /web_app```
```node server.js```



