const path = require('path');
const express = require('express');
const app = express();
const port = 3000; // 80

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('App listening on port ' + port);
});
