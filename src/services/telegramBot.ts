import TelegramBot, { KeyboardButton } from 'node-telegram-bot-api';
import config from '../config/config';

const createBot = (): void => {
  const bot = new TelegramBot(config.telegramToken, { polling: true });

  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const keyboard: TelegramBot.KeyboardButton[][] = [
      [{ text: 'Create new lead in CRM' }],
      [{ text: 'Other' }],
    ];

    bot.sendMessage(chatId, 'Выберите действие:', {
      reply_markup: {
        keyboard,
        one_time_keyboard: true,
      },
    });
  });

  bot.onText(/Create new lead in CRM/, (msg) => {
    const chatId = msg.chat.id;
    const crmSubjects = ['Тема1', 'Тема2', 'Тема3'];
    const subjectsKeyboard: KeyboardButton[][] = crmSubjects.map(subject => [{ text: subject }]);

    bot.sendMessage(chatId, 'Выберите тему для нового лида:', {
      reply_markup: {
        keyboard: subjectsKeyboard,
        one_time_keyboard: true,
      },
    });
  });

  bot.onText(/Тема1|Тема2|Тема3/, (msg) => {
    const chatId = msg.chat.id;
    const selectedSubject = msg.text;

    const funnelTypes = ['Type1', 'Type2', 'Type3'];
    const funnelTypesKeyboard: KeyboardButton[][] = funnelTypes.map(funnel => [{ text: funnel }]);

    bot.sendMessage(chatId, 'Выберите funnelTypes:', {
      reply_markup: {
        keyboard: funnelTypesKeyboard,
        one_time_keyboard: true,
      },
    });
  });

  bot.onText(/Type1|Type2|Type3/, (msg) => {
    const chatId = msg.chat.id;
    const selectedFunnelType = msg.text;

    const prioritys = ['Low', 'Normal', 'Hi'];
    const priorityKeyboard: KeyboardButton[][] = prioritys.map(priority => [{ text: priority }]);

    bot.sendMessage(chatId, 'Выберите priority:', {
      reply_markup: {
        keyboard: priorityKeyboard,
        one_time_keyboard: true,
      },
    });
  });

  bot.onText(/Responsible1|Responsible2|Responsible3/, (msg) => {
    const chatId = msg.chat.id;
    const selectedPriority = msg.text;

    const responsibles = ['Responsible1', 'Responsible2', 'Responsible3'];
    const responsibleKeyboard: KeyboardButton[][] = responsibles.map(responsible => [{ text: responsible }]);

    bot.sendMessage(chatId, 'Выберите responsible:', {
      reply_markup: {
        keyboard: responsibleKeyboard,
        one_time_keyboard: true,
      },
    });
  });






};

export { createBot };