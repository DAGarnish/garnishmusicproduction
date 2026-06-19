const https = require('https');
const urls = [
  'https://www.garnishmusicproduction.com/courses/composition/',
  'https://www.garnishmusicproduction.com/courses/mixing-and-mastering-course-london/',
  'https://www.garnishmusicproduction.com/courses/rhythm-section-programming/',
  'https://www.garnishmusicproduction.com/courses/vocal-production/'
];

urls.forEach(url => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      const img = data.match(/property="og:image"\s+content="([^"]+)"/);
      const h1 = data.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      console.log(url);
      console.log('IMG:', img ? img[1] : 'none');
      console.log('H1:', h1 ? h1[1].replace(/<[^>]+>/g, '').trim() : 'none');
      console.log('---');
    });
  });
});
