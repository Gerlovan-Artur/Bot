import { type Lead } from '../models/leadModel'
import instance from '../config/api'

export const createLead = async (lead: Lead): Promise<void> => {
  try {
    const response = await instance.post('/leads', {
      chatId: lead.chatId,
      messageText: lead.messageText
    })

    if (response.data.success) {
      console.log('Lead created successfully:', response.data.leadId)
    } else {
      console.error('Failed to create lead:', response.data.error)
    }
  } catch (error) {
    if (typeof error === 'string') {
      console.error('Error creating lead:', error)
    } else {
      console.error('Error creating lead:', JSON.stringify(error))
    }
  }
}
