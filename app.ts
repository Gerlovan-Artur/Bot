import { createBot } from './src/services/telegramBot';

const startApplication = async (): Promise<void> => {
  try {
    createBot();
  } catch (error: any) {
    console.error('Error starting the application:', error.message);
  }
};

startApplication();