const path = require('path');
const { engine } = require('express-handlebars');
const express = require('express');

const app = express();
const port = 3000; // 80

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        age: 30,
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
    });
});

app.listen(port, () => {
    console.log('App listening on port ' + port);
});
