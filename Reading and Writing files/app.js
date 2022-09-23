const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');
const write = require('./modules/write')
const read = require('./modules/read')

// const people = [
//     {name: `Gabriel`},
//     {name: `Paulo`},
//     {name: `Sabrino`},
//     {name: `Luke`}
// ];
// const json = JSON.stringify(people, '', 2);
// write(filePath, json)

async function readFile(path) {
    const data = await read(path)
    renderingData(data);
}

function renderingData(data) {
    data = JSON.parse(data);
    data.forEach(val => {
        console.log(val);
    });
}

readFile(filePath);
