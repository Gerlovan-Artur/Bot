const winston = require('winston');

// Настройка логирования в файл
const setupLogger = () => {
  return winston.createLogger({
    format: winston.format.simple(),
    transports: [
      new winston.transports.File({ filename: 'bot_logs.log' }),
    ],
  });
};

module.exports = { setupLogger };