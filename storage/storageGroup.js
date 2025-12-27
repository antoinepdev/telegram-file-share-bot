import { bot, storageGroupId, botUrl } from "../config.js"

bot.on("message", async (msg) => {
  const chatId = msg.chat.id
  if (chatId != storageGroupId) return false
  if (!msg.video & !msg.document) return false

  const fileId = msg.message_id
  bot.sendMessage(chatId, `${botUrl}?start=${fileId}`)
})
