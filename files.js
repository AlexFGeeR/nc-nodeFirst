const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, 'files');
const filePath = path.resolve(dirPath, 'data.json');
const file = readFile(filePath);
const content = file && JSON.parse(file) || [];

function addInFile(obj) {
    content.push(obj);
    const jsonContent = JSON.stringify(content, null, 2);
    fs.mkdirSync(dirPath, {recursive: true});
    fs.writeFileSync(filePath, jsonContent);
}

function readFile(filePath) {
    if ( fs.existsSync(filePath)) {
        return fs.readFileSync(filePath);
    }
    return null;
}

module.exports = {addInFile, content};