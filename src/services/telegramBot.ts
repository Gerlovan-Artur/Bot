import TelegramBot from 'node-telegram-bot-api'
import config from '../config/config'
import startHandler from '../handlers/startHandler'
import createLeadHandler from '../handlers/createLeadHandler'
import funnelTypeHandler from '../handlers/funnelTypeHandler'
import priorityHandler from '../handlers/priorityHandler'
import responsibleHandler from '../handlers/responsibleHandler'

const createBot = (): void => {
  const bot = new TelegramBot(config.telegramToken, { polling: true })

  bot.onText(/\/start/, (msg) => { startHandler(bot, msg) })
  bot.onText(/Create new lead in CRM/, (msg) => { createLeadHandler(bot, msg) })
  bot.onText(/Theme1|Theme2|Theme3/, (msg) => { funnelTypeHandler(bot, msg) })
  bot.onText(/Type1|Type2|Type3/, (msg) => { priorityHandler(bot, msg) })
  bot.onText(/Responsible1|Responsible2|Responsible3/, (msg) => { responsibleHandler(bot, msg) })
}

export { createBot }
