import type TelegramBot from 'node-telegram-bot-api'

const createLeadHandler = async (bot: TelegramBot, msg: TelegramBot.Message, state: any): Promise<void> => {
  try {
    const chatId = msg.chat.id;
    const crmSubjects = ['Theme1', 'Theme2', 'Theme3'];
    const subjectsKeyboard = crmSubjects.map((subject) => [{ text: subject }]);
    
    await bot.sendMessage(chatId, 'Выберите тему для нового лида:', {
      reply_markup: {
        keyboard: subjectsKeyboard,
        one_time_keyboard: true
      }
    })
    state.currentStep = 'funnelType';
    
  } catch (error) {
    console.error('Ошибка в createLeadHandler:', error)
    throw error
  }
}

export default createLeadHandler
