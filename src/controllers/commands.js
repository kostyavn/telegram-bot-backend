const { bot } = require('../configs/telegram')
const { buttons } = require('../utils')

// const { sendMessage, sendSticker } = bot

const { startButton } = buttons

const commandsList = [{ command: '/start', description: 'Start the app features' }]

const resolvers = async msg => {
  const chatId = msg.chat.id
  const text = msg.text

  switch (text) {
    case '/start':
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/918/290/918290ad-eabb-423f-987a-e2f9f1f88e9e/7.webp')
      await bot.sendMessage(
        chatId,
        'Hey! This is telegram bot, where you can play funny games and find cool stuff :)',
        startButton
      )
      break

    default:
      break
  }
}

module.exports = { commandsList, resolvers }
