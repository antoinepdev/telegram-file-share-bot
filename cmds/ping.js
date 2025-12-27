import { bot } from "../config.js"
import { isMsgPrivate } from "../validators/isMsgPrivate.js"

bot.onText(/^\/ping/, async (msg) => {
  const isPrivate = await isMsgPrivate(msg)
  if (!isPrivate) return

  bot.sendMessage(msg.from.id, "pong")
})
