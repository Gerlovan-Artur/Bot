"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBot = void 0;
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const config_1 = __importDefault(require("../config/config"));
const startHandler_1 = __importDefault(require("../handlers/startHandler"));
const createLeadHandler_1 = __importDefault(require("../handlers/createLeadHandler"));
const funnelTypeHandler_1 = __importDefault(require("../handlers/funnelTypeHandler"));
const priorityHandler_1 = __importDefault(require("../handlers/priorityHandler"));
const responsibleHandler_1 = __importDefault(require("../handlers/responsibleHandler"));
const createBot = () => {
    const bot = new node_telegram_bot_api_1.default(config_1.default.telegramToken, { polling: true });
    const state = { currentStep: 'start' };
    bot.onText(/\/start/, (msg) => __awaiter(void 0, void 0, void 0, function* () { yield (0, startHandler_1.default)(bot, msg, state); }));
    bot.onText(/Create new lead in CRM/, (msg) => __awaiter(void 0, void 0, void 0, function* () { yield (0, createLeadHandler_1.default)(bot, msg, state); }));
    bot.onText(/Theme1|Theme2|Theme3/, (msg) => __awaiter(void 0, void 0, void 0, function* () { yield (0, funnelTypeHandler_1.default)(bot, msg, state); }));
    bot.onText(/Type1|Type2|Type3/, (msg) => __awaiter(void 0, void 0, void 0, function* () { yield (0, priorityHandler_1.default)(bot, msg, state); }));
    bot.onText(/Responsible1|Responsible2|Responsible3/, (msg) => __awaiter(void 0, void 0, void 0, function* () { yield (0, responsibleHandler_1.default)(bot, msg, state); }));
    // Обработка всех входящих сообщений
    bot.on('message', (msg) => __awaiter(void 0, void 0, void 0, function* () {
        // Проверяем, является ли сообщение пересланным
        if (msg.forward_from || (msg.forward_date && msg.forward_from_chat)) {
            // Если сообщение переслано, вызываем обработчик startHandler
            yield (0, startHandler_1.default)(bot, msg, state);
        }
    }));
    // Обработчик коллбек-запросов
    bot.on('callback_query', (callbackQuery) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (!((_a = callbackQuery.message) === null || _a === void 0 ? void 0 : _a.chat)) {
            console.error('Некорректный callbackQuery:', callbackQuery);
            return;
        }
        const chatId = callbackQuery.message.chat.id;
        const messageId = callbackQuery.message.message_id;
        const data = callbackQuery.data;
        // Проверяем, какую кнопку выбрал пользователь
        if (data === 'createLead') {
            // Вызываем обработчик createLeadHandler
            yield bot.sendMessage(chatId, 'Создаём новый Lead.');
            bot.deleteMessage(chatId, messageId);
            yield (0, createLeadHandler_1.default)(bot, callbackQuery.message, state);
        }
        else if (data === 'otherOption') {
            // Обработка других вариантов, если необходимо
        }
    }));
    bot.on('callback_query', (callbackQuery) => __awaiter(void 0, void 0, void 0, function* () {
        var _b;
        if (!((_b = callbackQuery.message) === null || _b === void 0 ? void 0 : _b.chat)) {
            console.error('Некорректный callbackQuery:', callbackQuery);
            return;
        }
        const chatId = callbackQuery.message.chat.id;
        const messageId = callbackQuery.message.message_id;
        const data = callbackQuery.data;
        // Проверяем, какую кнопку выбрал пользователь
        if (data === 'funnelType') {
            // Вызываем обработчик createLeadHandler
            bot.deleteMessage(chatId, messageId);
            yield (0, funnelTypeHandler_1.default)(bot, callbackQuery.message, state);
        }
        else if (data === 'otherOption') {
            // Обработка других вариантов, если необходимо
        }
    }));
};
exports.createBot = createBot;
