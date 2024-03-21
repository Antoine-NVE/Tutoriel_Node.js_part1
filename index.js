const express = require('express');
const app = express();
const port = 3000; // 80

app.get('/', (request, response) => {
    response.send('<h1>Hello World</h1>');
});

app.get('/About', (request, response) => {
    response.send({
        name: 'Alex',
        age: 30,
    });
});

app.listen(port, () => {
    console.log('App listening on port ' + port);
});
