function doPost(e) {
  try {
    // Получаем данные из параметров формы
    const services = JSON.parse(e.parameter.services || '[]');
    const source = e.parameter.source || '';
    const otherSource = e.parameter.otherSource || '';
    const serviceRating = e.parameter.serviceRating || '';
    const resultRating = e.parameter.resultRating || '';
    const masterName = e.parameter.masterName || '';
    const improvements = e.parameter.improvements || '';
    const wantsOffers = e.parameter.wantsOffers === 'true';
    const phoneNumber = e.parameter.phoneNumber || '';

    const SHEET_ID = '1ErDWbXVEi4IAoh-updyOoJGnOZge-AxA8fG8Urg4WIw';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    // Добавляем заголовки, если лист пустой
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 9).setValues([[
        'Дата', 'Услуги', 'Источник', 'Рейтинг обслуживания',
        'Рейтинг результата', 'Имя мастера', 'Предложения',
        'Хочет получать предложения', 'Телефон'
      ]]);
    }

    // Формируем новую строку
    const newRow = [
      new Date().toLocaleString('ru-RU'),
      services.join(', '),
      source + (otherSource ? ` (${otherSource})` : ''),
      serviceRating,
      resultRating,
      masterName,
      improvements,
      wantsOffers ? 'Да' : 'Нет',
      phoneNumber
    ];

    sheet.appendRow(newRow);

    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    // Получаем данные из параметров URL
    const services = JSON.parse(e.parameter.services || '[]');
    const source = e.parameter.source || '';
    const otherSource = e.parameter.otherSource || '';
    const serviceRating = e.parameter.serviceRating || '';
    const resultRating = e.parameter.resultRating || '';
    const masterName = e.parameter.masterName || '';
    const improvements = e.parameter.improvements || '';
    const wantsOffers = e.parameter.wantsOffers === 'true';
    const phoneNumber = e.parameter.phoneNumber || '';

    const SHEET_ID = '1ErDWbXVEi4IAoh-updyOoJGnOZge-AxA8fG8Urg4WIw';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    // Добавляем заголовки, если лист пустой
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 9).setValues([[
        'Дата', 'Услуги', 'Источник', 'Рейтинг обслуживания',
        'Рейтинг результата', 'Имя мастера', 'Предложения',
        'Хочет получать предложения', 'Телефон'
      ]]);
    }

    // Формируем новую строку
    const newRow = [
      new Date().toLocaleString('ru-RU'),
      services.join(', '),
      source + (otherSource ? ` (${otherSource})` : ''),
      serviceRating,
      resultRating,
      masterName,
      improvements,
      wantsOffers ? 'Да' : 'Нет',
      phoneNumber
    ];

    sheet.appendRow(newRow);

    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}