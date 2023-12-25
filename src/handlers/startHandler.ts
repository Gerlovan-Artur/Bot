import type TelegramBot from 'node-telegram-bot-api'

const startHandler = async (bot: TelegramBot, msg: TelegramBot.Message, state: any): Promise<void> => {
  try {
    const chatId = msg.chat.id;
    const keyboard = [
      [{ text: 'Создать новый лид в CRM' }],
      [{ text: 'Другое' }]
    ]

    await bot.sendMessage(chatId, 'Выберите действие:', {
      reply_markup: {
        keyboard,
        one_time_keyboard: true
      }
    })
    state.currentStep = 'handlers';
    
  } catch (error) {
    console.error('Ошибка в startHandler:', error)

    throw error
  }
}

export default startHandler