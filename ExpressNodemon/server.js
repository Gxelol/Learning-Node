const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST">
    
    Name: <input type="text" name="name">
    <button>Send</button>
    
    </form>`);
});

app.post('/', (req, res) => {
    res.send('Sent.')
});

app.listen(3000, () => {
    console.log('Access http://localhost:3000');
    console.log('Server running on port 3000');
});