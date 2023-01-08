const { configs, controllers } = require('./src/index')

/* configs */
const { telegram } = configs

/* controllers */
const { commands } = controllers

/**
 * Application start
 */
const appLaunch = () => {
  try {
    console.log('Telegram bot has been started')

    const { bot } = telegram
    const { commandsList, resolvers } = commands

    bot.setMyCommands(commandsList)

    bot.on('message', resolvers)
  } catch (error) {
    console.log('An error occurred while trying to launch the app. Error: ' + error)
  }
}

appLaunch()
