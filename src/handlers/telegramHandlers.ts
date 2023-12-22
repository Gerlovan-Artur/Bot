import { Message } from 'node-telegram-bot-api';
import { createLead } from '../services/crmService';

export const handleMessage = (msg: Message) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText !== undefined) {
    createLead({ chatId, messageText });
  }
};