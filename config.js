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
const storageGroup = process.env.STORAGE_GROUP
envVariablesValidator("BOT_TOKEN", botToken)
envVariablesValidator("STORAGE_GROUP", storageGroup)

const bot = new TelegramBot(botToken, { polling: true })

export { bot, storageGroup }
