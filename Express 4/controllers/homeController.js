exports.homePage = (req, res) => {
    res.send(`<form action="/" method="POST">
    
    Name: <input type="text" name="name">
    <button>Send</button>
    
    </form>`);
}

exports.postTreat = (req, res) => {
    res.send(`Post route`);
}