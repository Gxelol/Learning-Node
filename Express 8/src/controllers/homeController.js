exports.homePage = (req, res) => {
    res.render('index');
    return;
}

exports.postTreat = (req, res) => {
    res.send(req.body);
    return;
}