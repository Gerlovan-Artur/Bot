import type TelegramBot from 'node-telegram-bot-api'

const responsibleHandler = async (bot: TelegramBot, msg: TelegramBot.Message): Promise<void> => {
  try {
    const chatId = msg.chat.id
    const selectedPriority = msg.text

    const responsibles = ['Responsible1', 'Responsible2', 'Responsible3']
    const responsibleKeyboard = responsibles.map(responsible => [{ text: responsible }])

    await bot.sendMessage(chatId, 'Выберите responsible:', {
      reply_markup: {
        keyboard: responsibleKeyboard,
        one_time_keyboard: true
      }
    })
  } catch (error) {
    console.error('Ошибка в responsibleHandler:', error)
    throw error
  }
}

export default responsibleHandler
