const https = require('https');

https.get('https://www.garnishmusicproduction.com/courses/logic-pro-x-course-london/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    // extract hero image
    const heroMatch = data.match(/url\(['"]?(.*?wp-content\/uploads.*?\.jpg)['"]?\)/i);
    if(heroMatch) console.log('Hero Image:', heroMatch[1]);
    
    // extract iframe
    const iframeMatch = data.match(/<iframe.*?src=['"](.*?)['"]/i);
    if(iframeMatch) console.log('Iframe:', iframeMatch[1]);

    // testinomials
    const testimonials = [...data.matchAll(/<p.*?italic.*?>([\s\S]*?)<\/p>[\s\S]*?<h5.*?>([\s\S]*?)<\/h5>/g)];
    if(testimonials.length) {
        testimonials.forEach((m, i) => {
            console.log(`Testimonial ${i+1}: ${m[1].trim()} - ${m[2].trim()}`);
        });
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
