const TelegramBot = require('node-telegram-bot-api')
const { parsed } = require('dotenv').config()

/**
 * Telegram token for starting bot
 */
const token = parsed.TOKEN || ''

const bot = new TelegramBot(token, { polling: true })

module.exports = { bot }
