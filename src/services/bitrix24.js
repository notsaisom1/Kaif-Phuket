/**
 * Bitrix24 CRM Integration Service
 * Отправка лидов через REST API входящего вебхука
 */

const BITRIX_WEBHOOK_URL = import.meta.env.VITE_BITRIX24_WEBHOOK_URL;

/**
 * Создание лида в Bitrix24 CRM
 * @param {Object} data - Данные формы
 * @param {string} data.name - Имя клиента
 * @param {string} data.email - Email
 * @param {string} data.phone - Телефон (опционально)
 * @param {string} data.message - Сообщение (опционально)
 * @param {string} data.source - Источник заявки (опционально)
 * @returns {Promise<Object>} - Ответ от Bitrix24
 */
export const createLead = async (data) => {
  if (!BITRIX_WEBHOOK_URL) {
    console.error('Bitrix24 webhook URL not configured');
    throw new Error('CRM integration not configured');
  }

  const fields = {
    TITLE: `Заявка с сайта KAIF: ${data.name}`,
    NAME: data.name,
    SOURCE_ID: 'WEB',
    SOURCE_DESCRIPTION: data.source || 'Форма на сайте kaif.club',
  };

  // Добавляем телефон если есть
  if (data.phone) {
    fields.PHONE = [{ VALUE: data.phone, VALUE_TYPE: 'MOBILE' }];
  }

  // Добавляем email если есть
  if (data.email) {
    fields.EMAIL = [{ VALUE: data.email, VALUE_TYPE: 'WORK' }];
  }

  // Добавляем комментарий если есть
  if (data.message) {
    fields.COMMENTS = data.message;
  }

  try {
    const response = await fetch(`${BITRIX_WEBHOOK_URL}crm.lead.add.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.error) {
      console.error('Bitrix24 API error:', result.error, result.error_description);
      throw new Error(result.error_description || result.error);
    }

    console.log('Lead created successfully, ID:', result.result);
    return result;
  } catch (error) {
    console.error('Failed to create lead in Bitrix24:', error);
    throw error;
  }
};

/**
 * Создание лида для записи на услугу
 * @param {Object} data - Данные бронирования
 */
export const createBookingLead = async (data) => {
  const message = [
    data.service && `Услуга: ${data.service}`,
    data.date && `Дата: ${data.date}`,
    data.time && `Время: ${data.time}`,
    data.guests && `Гостей: ${data.guests}`,
    data.message && `Комментарий: ${data.message}`,
  ].filter(Boolean).join('\n');

  return createLead({
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: message,
    source: data.source || 'Форма записи на сайте',
  });
};

export default {
  createLead,
  createBookingLead,
};
