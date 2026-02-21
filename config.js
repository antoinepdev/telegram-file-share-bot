import TelegramBot from "node-telegram-bot-api"

// Config enviroment variables
function envVariablesValidator(envVariableKey, envVariableValue) {
  if (!envVariableValue)
    throw new Error(
      "Envarioment variable not provided: " +
      envVariableKey +
      " : " +
      envVariableValue,
    )
}
const botToken = process.env.BOT_TOKEN
const storageGroupId = process.env.STORAGE_GROUP_ID
const botUrl = process.env.BOT_URL
const skipQuickAdGuideMessage = process.env.SKIP_QUICK_AD_GUIDE_MESSAGE
const quickAdUrl = process.env.QUICK_AD_URL
const quickAdProcessDurationInSeconds = Number(process.env.QUICK_AD_PROCESS_DURATION_IN_SECONDS) || 15
envVariablesValidator("BOT_TOKEN", botToken)
envVariablesValidator("STORAGE_GROUP_ID", storageGroupId)
envVariablesValidator("BOT_URL", botUrl)
envVariablesValidator("SKIP_QUICK_AD_GUIDE_MESSAGE", skipQuickAdGuideMessage)
envVariablesValidator("QUICK_AD_URL", quickAdUrl)

const bot = new TelegramBot(botToken, { polling: true })

export {
  bot,
  storageGroupId,
  botUrl,
  skipQuickAdGuideMessage,
  quickAdUrl,
  quickAdProcessDurationInSeconds
}
