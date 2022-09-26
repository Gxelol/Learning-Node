const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST">
    
    Name: <input type="text" name="name">
    <button>Send</button>
    
    </form>`);
});

app.get('/tests/:idUsers?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`You sent me: ${req.body.name}`)
});

app.listen(3000, () => {
    console.log('Access http://localhost:3000');
    console.log('Server running on port 3000');
});