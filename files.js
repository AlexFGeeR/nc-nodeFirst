const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, 'files');
const filePath = path.resolve(dirPath, 'data.json');
const FILE = readFile(filePath);

const content = FILE && JSON.parse(FILE) || [];

function readFile(filePath) {
    if( fs.existsSync(filePath)) {
        return fs.readFileSync(filePath);
    }
}