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
}

export { createBot }
