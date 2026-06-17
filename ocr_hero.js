const Tesseract = require('tesseract.js');
Tesseract.recognize(
  'hero.png',
  'eng',
  { logger: m => {} }
).then(({ data: { text } }) => {
  console.log('---TEXT---');
  console.log(text);
}).catch(e => {
  console.error("Error running OCR:", e);
});
