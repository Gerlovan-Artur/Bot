"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMessage = void 0;
const crmService_1 = require("../services/crmService");
const handleMessage = (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;
    if (messageText !== undefined) {
        (0, crmService_1.createLead)({ chatId, messageText });
    }
};
exports.handleMessage = handleMessage;
