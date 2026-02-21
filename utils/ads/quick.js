import { quickAdUrl, skipQuickAdGuideMessage } from "../../config.js"

export async function sendQuickAd(bot, userId) {
  const inlineKeyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔓 Desbloquear Archivo", url: quickAdUrl }],
      ],
    },
  }
  await bot.sendMessage(userId, skipQuickAdGuideMessage, inlineKeyboard)
}
