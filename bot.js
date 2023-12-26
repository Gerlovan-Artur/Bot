const TelegramBot = require('node-telegram-bot-api');
const { setupLogger } = require('./logger');

// Настройка логирования
const logger = setupLogger();

// Замените 'YOUR_BOT_TOKEN' на фактический токен вашего бота
const bot = new TelegramBot('YOUR_BOT_TOKEN', { polling: true });

// Логика обработки команд и другие события...

// Обработка ошибок
bot.on('polling_error', (error) => {
  logger.error(`Polling error: ${error.message}`);
});

// Обработка ошибок при старте бота
bot.on('webhook_error', (error) => {
  logger.error(`Webhook error: ${error.message}`);
});

// Логирование при старте бота
logger.info('Bot started polling for updates');