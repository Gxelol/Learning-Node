const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<button>Send</button>');
});

app.post('/', (req, res) => {
    res.send('Sent.')
});

app.get('/contact', (req, res) => {
    res.send('Thank your for getting in touch with us');
});

app.listen(3000, () => {
    console.log('Access http://localhost:3000');
    console.log('Server running on port 3000');
});