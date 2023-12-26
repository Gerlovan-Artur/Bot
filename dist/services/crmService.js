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
exports.createLead = void 0;
const api_1 = __importDefault(require("../config/api"));
const createLead = (lead) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield api_1.default.post('/leads', {
            chatId: lead.chatId,
            messageText: lead.messageText
        });
        if (response.data.success) {
            console.log('Lead created successfully:', response.data.leadId);
        }
        else {
            console.error('Failed to create lead:', response.data.error);
        }
    }
    catch (error) {
        if (typeof error === 'string') {
            console.error('Error creating lead:', error);
        }
        else {
            console.error('Error creating lead:', JSON.stringify(error));
        }
    }
});
exports.createLead = createLead;
