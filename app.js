const TelegramBot = require('node-telegram-bot-api')
const { parsed } = require('dotenv').config()

const token = parsed.TOKEN || ''

const bot = new TelegramBot(token, { polling: true })

bot.on('message', msg => {
  const chatId = msg.chat.id

  bot.sendMessage(chatId, 'Received your message')
})

/**
 * Application start
 */
const appLaunch = () => {
  try {
    console.log('Telegram bot has been started')
  } catch (error) {
    console.log('An error occurred while trying to launch the app. Error: ' + error)
  }
}

appLaunch()
