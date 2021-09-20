const express = require ('express');

const app = express();

const path = require ('path');

app.listen(3030, () => {console.log('Server up and running');});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});