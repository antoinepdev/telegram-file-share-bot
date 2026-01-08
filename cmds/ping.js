import { bot } from "../config.js"
import { isMsgPrivate } from "../validators/isMsgPrivate.js"

bot.onText(/^\/ping/, async (msg) => {
  const isPrivate = await isMsgPrivate(msg)
  if (!isPrivate) return

  try {
    bot.sendMessage(msg.from.id, "pong")
  } catch (error) {
    if (await userBlocksBotError(error)) return
    else console.error(error)
  }
})
