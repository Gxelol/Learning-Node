exports.globalMiddleware = (req, res, next) => {
    res.locals.localVariable = 'Just a test, this could be a object, an array, a function, etc...';
    next();
};
