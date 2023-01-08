// const createButtton = (buttonText, ) =>{
//     return {
//         reply_markup: {
//             inline_keyboard: [
//                 [{text: buttonText, }]
//             ]
//         }
//     }
// }

const startButton = {
  reply_markup: {
    inline_keyboard: [[{ text: 'Find cool wallpapers', web_app: { url: 'https://www.google.ru/' } }]]
  }
}

module.exports = {
  startButton
}
