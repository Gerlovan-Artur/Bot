"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBot = void 0;
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const config_1 = __importDefault(require("../config/config"));
const createBot = () => {
    const bot = new node_telegram_bot_api_1.default(config_1.default.telegramToken, { polling: true });
    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;
        const keyboard = [
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
        const subjectsKeyboard = crmSubjects.map(subject => [{ text: subject }]);
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
        const funnelTypesKeyboard = funnelTypes.map(funnel => [{ text: funnel }]);
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
        const priorityKeyboard = prioritys.map(priority => [{ text: priority }]);
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
        const responsibleKeyboard = responsibles.map(responsible => [{ text: responsible }]);
        bot.sendMessage(chatId, 'Выберите responsible:', {
            reply_markup: {
                keyboard: responsibleKeyboard,
                one_time_keyboard: true,
            },
        });
    });
};
exports.createBot = createBot;
