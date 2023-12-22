const TelegramBot = require('node-telegram-bot-api');
const config = require('../Bot/config/config');
const crmService = require('../Bot/services/crmService');

const createBot = () => {
  const bot = new TelegramBot(config.telegramToken, { polling: true });

  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    crmService.createLead(chatId, messageText);
  });
};

module.exports = {
  createBot,
};