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
envVariablesValidator("BOT_TOKEN", botToken)

const bot = new TelegramBot(botToken, { polling: true })

export { bot }
