# Flipnote-Telegram-App
A simple web app for taking notes, built to run on Telegram's web app platform (also called tApps).
This repo could be helpful for you to learn the tApp basics, as well as play with the build. 

The repository consists of two instances: the 'bot' and 'web_app':

bot
The first is needed to maintain the bot upon which the web app will be hosted. It serves as an event listener to the Telegram bot that will host the web app. All it pretty much does is respond on /start with a button that opens the web app.

web_app
The app itself is a minimalistic Express.js-based instance that lets us process the key mechanics of taking notes. It consists of a single index.html file, a .js file containing the scripts, and a communication route with the database via Ajax.


```ass```
