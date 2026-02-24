import { bot } from "../../config.js"
import { userBlocksBotError } from "../errors/userBlocksBotError.js"

export async function sendMessage(toId, msg, options = {}) {
  bot.sendMessage(toId, msg, options).catch(error => {
    if (userBlocksBotError(error)) return
    else console.error(error)
  })
}
