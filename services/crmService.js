const axios = require('axios');
const config = require('../config/config');

const createLead = async (chatId, messageText) => {
  try {
    const response = await axios.post(`${config.crmApiUrl}/leads`, {
      token: config.crmToken,
      chatId,
      messageText,
    });

    if (response.data.success) {
      console.log('Lead created successfully:', response.data.leadId);
    } else {
      console.error('Failed to create lead:', response.data.error);
    }
  } catch (error) {
    console.error('Error creating lead:', error.message);
  }
};

module.exports = {
  createLead,
};