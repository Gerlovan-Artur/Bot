import type TelegramBot from 'node-telegram-bot-api'

const priorityHandler = async (bot: TelegramBot, msg: TelegramBot.Message, state: any): Promise<void> => {
  try {
    const chatId = msg.chat.id
    const text = msg.text

    const prioritys = ['Low', 'Normal', 'Hi']
    const priorityKeyboard = prioritys.map(priority => [{ text: priority }])

    await bot.sendMessage(chatId, `Вы выбрали приоритет: ${text}`, {
      reply_markup: {
        keyboard: priorityKeyboard,
        one_time_keyboard: true
      }
    })
    state.currentStep = 'responsible'
  } catch (error) {
    console.error('Ошибка в priorityHandler:', error)
    throw error
  }
}

export default priorityHandler
