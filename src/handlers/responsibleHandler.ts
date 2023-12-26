import type TelegramBot from 'node-telegram-bot-api'

const responsibleHandler = async (bot: TelegramBot, msg: TelegramBot.Message, state: any): Promise<void> => {
  try {
    const chatId = msg.chat.id
    const text = msg.text

    const responsibles = ['Responsible1', 'Responsible2', 'Responsible3']
    const responsibleKeyboard = responsibles.map(responsible => [{ text: responsible }])

    await bot.sendMessage(chatId, `Вы выбрали ответственного: ${text}`, {
      reply_markup: {
        keyboard: responsibleKeyboard,
        one_time_keyboard: true
      }
    })
    state.currentStep = 'description'
  } catch (error) {
    console.error('Ошибка в responsibleHandler:', error)
    throw error
  }
}

export default responsibleHandler
