import type TelegramBot from 'node-telegram-bot-api'

const funnelTypeHandler = async (bot: TelegramBot, msg: TelegramBot.Message, state: any): Promise<void> => {
  try {
    const chatId = msg.chat.id
    const text = msg.text;

    const funnelTypes = ['Type1', 'Type2', 'Type3']
    const funnelTypesKeyboard = funnelTypes.map(funnel => [{ text: funnel }])

    await bot.sendMessage(chatId, 'Вы выбрали тему: ${text}', {
      reply_markup: {
        keyboard: funnelTypesKeyboard,
        one_time_keyboard: true
      }
    })
    state.currentStep = 'priority';
  } catch (error) {
    console.error('Ошибка в funnelTypeHandler:', error)
    throw error
  }
}

export default funnelTypeHandler
