import type TelegramBot from 'node-telegram-bot-api'

const funnelTypeHandler = async (bot: TelegramBot, msg: TelegramBot.Message): Promise<void> => {
  try {
    const chatId = msg.chat.id
    const selectedSubject = msg.text

    const funnelTypes = ['Type1', 'Type2', 'Type3']
    const funnelTypesKeyboard = funnelTypes.map(funnel => [{ text: funnel }])

    await bot.sendMessage(chatId, 'Выберите funnelTypes:', {
      reply_markup: {
        keyboard: funnelTypesKeyboard,
        one_time_keyboard: true
      }
    })
  } catch (error) {
    console.error('Ошибка в funnelTypeHandler:', error)
    throw error
  }
}

export default funnelTypeHandler
