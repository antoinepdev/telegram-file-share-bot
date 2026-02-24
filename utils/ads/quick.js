import { quickAdUrl, skipQuickAdGuideMessage } from "../../config.js"
import { sendMessage } from "../senders/sendMessage.js"

export async function sendQuickAd(userId) {
  const inlineKeyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔓 Desbloquear Archivo", url: quickAdUrl }],
      ],
    },
  }
  sendMessage(userId, skipQuickAdGuideMessage, inlineKeyboard)
}
