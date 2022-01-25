const mineflayer = require("mineflayer");
require("colors");
const config = require("./config.json");

const bot = mineflayer.createBot({
    host: `${config.serverIP}`,
    username: `${config.email}`,
    password: `${config.password}`,
    version: `${config.version}`,
    auth: `${config.auth}`
})
module.exports = bot;

bot.once("spawn", async () => {
    console.log("Successfully spawned into host server! (" + config.serverIP + ")")
    // bot.chat("Hey there!")
})

bot.on("chat", async (username, message) => {
    if(message === `Hey there ${bot.username}`) {
        bot.chat("Hey there! You can change this in index.js");   
    }

    if(message.startsWith("!!say ")) {
        if(username === "YOUR USERNAME") {
            bot.chat(message.substring("!!say ".length))
        }
    }
})

bot.on("kicked", async (reason) => {
    console.log("[Kicked] ".red + "The bot was kicked! Find the reason below: \n\n" + reason)
})

bot.on("death", async () => {
    console.log("Uh oh! I died!")
    bot.chat("Hey! I died :(")
})