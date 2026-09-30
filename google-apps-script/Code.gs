const SPREADSHEET_ID = 'PASTE_SPREADSHEET_ID_HERE';
const SHEET_NAME = '会員データ';

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) throw new Error('リクエスト本文がありません。');
    const data = JSON.parse(e.postData.contents);
    ['memberId', 'name', 'kana', 'email', 'scentPreference', 'createdAt'].forEach((key) => {
      if (!data[key]) throw new Error(`${key} is required`);
    });
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error(`シート「${SHEET_NAME}」が見つかりません。`);
    sheet.appendRow([data.memberId, data.name, data.kana, data.email, data.scentPreference, data.createdAt]);
    return jsonResponse({ status: 'success' });
  } catch (error) {
    return jsonResponse({ status: 'error', message: error.message });
  }
}

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
