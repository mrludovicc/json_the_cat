const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (!response) {
    return console.log('Website failed to load')
  }
  try {
    const data = JSON.parse(body);
    console.log(data[0].description)
  } catch {
    console.log('cat breed is not found... Please change it.')
  }
});