import { bot } from "../../config.js"
import { notFoundError } from "../errors/notFoundError.js"
import { sendMessage } from "./sendMessage.js"

export async function copyMessage(toId, fromId, MsgId) {
  bot.copyMessage(toId, fromId, MsgId).catch(error => {
    if (userBlocksBotError(error)) return
    else if (notFoundError(error)) sendMessage(toId, "File not found")
    else console.error(error)
  })
}
