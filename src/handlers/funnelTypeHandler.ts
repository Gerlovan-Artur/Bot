import type TelegramBot from 'node-telegram-bot-api';

const funnelTypeHandler = async (bot: TelegramBot, msg: TelegramBot.Message, state: any): Promise<void> => {
  try {
    const chatId = msg.chat.id;
    // const text = msg.text;

    // const funnelTypes = ['Type1', 'Type2', 'Type3']
    // const funnelTypesKeyboard = funnelTypes.map(funnel => [{ text: funnel }])

    await bot.sendMessage(chatId, 'Выберите FunnelType', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'UpWork.Proposals', callback_data: 'priority' }],
          [{ text: 'Partners', callback_data: 'priority' }],
          [{ text: 'UpWork.Invites', callback_data: 'priority' }],
          [{ text: 'LinkedIn', callback_data: 'priority' }],
          [{ text: 'GroupsJobs', callback_data: 'priority' }],
          [{ text: 'GroupsPosts', callback_data: 'priority' }],
          [{ text: 'General', callback_data: 'priority' }],
          [{ text: 'InProgressProjects', callback_data: 'priority' }],
          [{ text: 'ClosedProjectsNewTasks', callback_data: 'priority' }],
          [{ text: 'Site/Web/Blog', callback_data: 'priority' }]
        ],
        one_time_keyboard: true,
        force_reply: true
      }
    })
    state.currentStep = 'priority'
  } catch (error) {
    console.error('Ошибка в funnelTypeHandler:', error)
    throw error
  }
}

export default funnelTypeHandler
