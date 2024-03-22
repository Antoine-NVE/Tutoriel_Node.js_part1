const path = require('path');
const { engine } = require('express-handlebars');
const { weather } = require('./utils/weather.js');
const express = require('express');

const app = express();
const port = 3000; // 80

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const { location } = req.query;

    if (!location) {
        return res.send("Une erreur s'est produite, il manque la localisation");
    }

    weather(location, (err, data) => {
        console.log(err, data);
    });

    res.render('home', {
        title: 'Home',
        age: 30,
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Alex',
    });
});

// app.get(/\/about\/.*/, (req, res) => {
//     res.render('404_about', {
//         title: '404_about',
//     });
// });

app.get(/.*/, (req, res) => {
    res.render('404', {
        title: '404',
    });
});

// app.use((req, res, next) => {
//     res.status(404).render('404', {
//         title: 404,
//     });
// });

app.use((req, res, next) => {
    res.status(500).send('Erreur 500');
});

app.listen(port, () => {
    console.log('App listening on port ' + port);
});
