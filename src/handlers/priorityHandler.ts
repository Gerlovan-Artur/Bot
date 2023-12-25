import type TelegramBot from 'node-telegram-bot-api'

const priorityHandler = async (bot: TelegramBot, msg: TelegramBot.Message): Promise<void> => {
  try {
    const chatId = msg.chat.id
    const selectedFunnelType = msg.text

    const prioritys = ['Low', 'Normal', 'Hi']
    const priorityKeyboard = prioritys.map(priority => [{ text: priority }])

    await bot.sendMessage(chatId, 'Выберите priority:', {
      reply_markup: {
        keyboard: priorityKeyboard,
        one_time_keyboard: true
      }
    })
  } catch (error) {
    console.error('Ошибка в priorityHandler:', error)
    throw error
  }
}

export default priorityHandler
