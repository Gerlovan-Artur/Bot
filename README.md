# Bot

Название проекта: Telegram CRM Lead Bot

Описание:
Проект представляет собой телеграм-бота, написанного на языке программирования Node.js с использованием TypeScript. Бот интегрирован с CRM-системой и предназначен для автоматизации процесса создания новых лидов (записей) в CRM на основе сообщений, полученных от пользователей в чате Telegram.

Ключевые компоненты проекта:

TelegramBot: Модуль, отвечающий за создание и настройку телеграм-бота с использованием библиотеки node-telegram-bot-api.

TelegramHandlers: Модуль, содержащий обработчики событий для телеграм-бота, включая обработчик для получения сообщений от пользователей и передачи их в CRM.

CrmService: Модуль, обеспечивающий взаимодействие с CRM-системой. Включает функционал для создания новых лидов на основе данных, полученных от телеграм-бота.

Config: Модуль, содержащий конфигурационные данные проекта, такие как токены для доступа к API Telegram и CRM.

Основной функционал:

Получение сообщений от пользователей через телеграм-бота.
Создание новых лидов в CRM на основе полученных сообщений.
Обработка ошибок и логирование в случае возникновения проблем.
Цель проекта:
Автоматизация процесса записи в CRM информации, полученной через чат Telegram, для упрощения и улучшения работы с потенциальными клиентами.

Проект может быть полезен бизнесам, которые используют Telegram для взаимодействия с клиентами и хотят интегрировать эту информацию в свою CRM-систему.

## Установка зависимостей

Выполните следующую команду для установки необходимых зависимостей:

npm install

## Запуск проекта

Для запуска проекта выполните следующую команду:

npm start

## Конфигурация

В файле `config.js` вы можете настроить следующие параметры:

- `telegramToken`: Токен вашего телеграм-бота.
- `crmToken`: Токен для взаимодействия с CRM API.
- `crmApiUrl`: URL для взаимодействия с CRM API.
