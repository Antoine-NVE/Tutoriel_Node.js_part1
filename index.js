const request = require('postman-request');

request('https://dog.ceo/api/breeds/image/random', (error, response, body) => {
    const { message, status } = JSON.parse(body);
    console.log(message);
    console.log(status);
});

request(
    'https://api.thecatapi.com/v1/images/search',
    (error, response, body) => {
        const catPicture = JSON.parse(body);
        console.log(catPicture[0].url);
    }
);
