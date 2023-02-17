const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    const breed = data[0];
    
    console.log('data:' , data)
    if (data.length === 0) {
      return callback(null, `${breedName} breed is not found... Please change it.`);
    }

    return callback(null, breed.description);

  });
};

module.exports = { fetchBreedDescription };
      
      // request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
      //   if (!response) {
      //     return console.log('Website failed to load')
      //   }
      //   try {
      //     const data = JSON.parse(body);
      
      //     console.log(data[0].description)
      //   } catch {
      //     console.log('cat breed is not found... Please change it.')
      //   }
      // });