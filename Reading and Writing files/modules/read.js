const { read } = require('fs');

const fs = require('fs').promises;

module.exports = (path) => fs.readFile(path, 'utf8');
