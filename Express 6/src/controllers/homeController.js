exports.homePage = (req, res) => {
    res.render('index');
}

exports.postTreat = (req, res) => {
    res.send(`Post route`);
}