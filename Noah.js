 const aoijs = require("aoi.js")
const dados = require('./Noah.json');
const bot = new aoijs.Bot({
token: Noah.token,, //Discord Bot Token
prefix: Noah.prefix //Discord Bot Prefix
})
bot.onMessage() //Allows to execute Commands

bot.command({
name: "ping", //Trigger name (command name)
code: `Pong! \`$ping\`ms` //Code
})

bot.readyCommand({
    channel: "", //You can use this or not
    code: `$log[Ready on $userTag[$clientID]]` //Example Ready on Client
})