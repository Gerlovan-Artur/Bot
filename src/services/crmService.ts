import axios, { AxiosInstance } from 'axios';
import  config  from '../config/config';
import { Lead } from '../models/leadModel';

const axiosConfig: AxiosInstance = axios.create({
  baseURL: config.crmApiUrl,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${config.crmToken}`,
  },
});

export const createLead = async (lead: Lead) => {
  try {
    const response = await axiosConfig.post('/leads', {
      chatId: lead.chatId,
      messageText: lead.messageText,
    });

    if (response.data.success) {
      console.log('Lead created successfully:', response.data.leadId);
    } else {
      console.error('Failed to create lead:', response.data.error);
    }
  } catch (error) {
    if (typeof error === 'string') {
      console.error('Error creating lead:', error);
    } else {
      console.error('Error creating lead:', JSON.stringify(error));
    }
  }
};