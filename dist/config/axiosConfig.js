"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config/config"));
const instance = axios_1.default.create({
    baseURL: config_1.default.crmApiUrl,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config_1.default.crmToken}`,
    },
});
instance.interceptors.response.use((response) => response, (error) => {
    console.error('Axios request failed:', error.message);
    return Promise.reject(error);
});
exports.default = instance;
