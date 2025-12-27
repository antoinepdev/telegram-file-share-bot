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
envVariablesValidator("BOT_TOKEN", botToken)
envVariablesValidator("STORAGE_GROUP_ID", storageGroupId)
envVariablesValidator("BOT_URL", botUrl)

const bot = new TelegramBot(botToken, { polling: true })

export { bot, storageGroupId, botUrl }
