import TelegramBot from 'node-telegram-bot-api'
import config from '../config/config'
import startHandler from '../handlers/startHandler'
import createLeadHandler from '../handlers/createLeadHandler'
import funnelTypeHandler from '../handlers/funnelTypeHandler'
import priorityHandler from '../handlers/priorityHandler'
import responsibleHandler from '../handlers/responsibleHandler'

const createBot = (): void => {
  const bot = new TelegramBot(config.telegramToken, { polling: true })
  const state = { currentStep: 'start' }

  bot.onText(/\/start/, async (msg) => { await startHandler(bot, msg, state) })
  bot.onText(/Create new lead in CRM/, async (msg) => { await createLeadHandler(bot, msg, state) })
  bot.onText(/Theme1|Theme2|Theme3/, async (msg) => { await funnelTypeHandler(bot, msg, state) })
  bot.onText(/Type1|Type2|Type3/, async (msg) => { await priorityHandler(bot, msg, state) })
  bot.onText(/Responsible1|Responsible2|Responsible3/, async (msg) => { await responsibleHandler(bot, msg, state) })

   // Обработка всех входящих сообщений
  bot.on('message', async (msg) => {
    // Проверяем, является ли сообщение пересланным
    if (msg.forward_from || (msg.forward_date && msg.forward_from_chat)) {
      // Если сообщение переслано, вызываем обработчик startHandler
      await startHandler(bot, msg, state);
    }
  });

  // Обработчик коллбек-запросов
  bot.on('callback_query', async (callbackQuery) => {
    if (!callbackQuery.message?.chat) {
      console.error('Некорректный callbackQuery:', callbackQuery);
      return;
    }

    const chatId = callbackQuery.message.chat.id
    const messageId = callbackQuery.message.message_id
    const data = callbackQuery.data

    // Проверяем, какую кнопку выбрал пользователь
    if (data === 'createLead') {
      // Вызываем обработчик createLeadHandler
      await bot.sendMessage(chatId, 'Создаём новый Lead.')
      bot.deleteMessage(chatId, messageId)
      await createLeadHandler(bot, callbackQuery.message, state)
    } else if (data === 'otherOption') {
      // Обработка других вариантов, если необходимо
    }
  })
  bot.on('callback_query', async (callbackQuery) => {
    if (!callbackQuery.message?.chat) {
      console.error('Некорректный callbackQuery:', callbackQuery)
      return
    }

    const chatId = callbackQuery.message.chat.id
    const messageId = callbackQuery.message.message_id
    const data = callbackQuery.data

    // Проверяем, какую кнопку выбрал пользователь
    if (data === 'funnelType') {
      // Вызываем обработчик createLeadHandler
      bot.deleteMessage(chatId, messageId)
      await funnelTypeHandler(bot, callbackQuery.message, state)
    } else if (data === 'otherOption') {
      // Обработка других вариантов, если необходимо
    }
  })
}

export { createBot }
