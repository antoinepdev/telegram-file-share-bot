import { bot, storageGroup } from "../config"

bot.on("message", async (msg) => {
  const chatId = msg.chat.id
  if (chatId != storageGroup) return false
})
