import type TelegramBot from 'node-telegram-bot-api'

const startHandler = async (bot: TelegramBot, msg: TelegramBot.Message, state: any): Promise<void> => {
  try {
    const chatId = msg.chat.id

    const message = await bot.sendMessage(chatId, 'Выберите действие:', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Create new lead', callback_data: 'createLead' }],
          [{ text: 'Some other option', callback_data: 'OtherOption' }]
        ],
        one_time_keyboard: true,
        force_reply: true
      }
    })
    state.messageIdToDeleteKeyboard = message.message_id;
    state.currentStep = 'start' // Или оставьте 'createLead', в зависимости от вашей логики
  } catch (error) {
    console.error('Ошибка в startHandler:', error)
    throw error
  }
}

export default startHandler
