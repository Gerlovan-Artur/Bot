import TelegramBot, { Message } from 'node-telegram-bot-api';
import * as telegramHandlers from '../handlers/telegramHandlers';
import config from '../config/config';

const createBot = (): void => {
  const bot = new TelegramBot(config.telegramToken, { polling: true });

  bot.on('message', async (msg: Message) => {
    try {
      await telegramHandlers.handleMessage(msg);
    } catch (error: any) {
      console.error('Error handling message:', error.message);
    }
  });
};

export { createBot };