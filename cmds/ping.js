import { bot } from "../config.js"

bot.onText(/^\/ping/, async (msg) => {
  bot.sendMessage(msg.from.id, "pong")
})
