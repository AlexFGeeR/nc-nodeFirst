const readline = require("readline");
const { addInFile, content } = require('./files');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function getInput(rl) {
    return new Promise(resolve => {
        rl.question('>', answer => resolve(answer));
    })
}

function objectBuilder(name, desc, price) {
    return {id: Object.keys(content).length + 1, name: name, desc: desc, price: price }
}

async function addProduct() {
    console.log('Insert name of product: ');
    let name  = await getInput(rl);
    console.log('Insert desc of product: ');
    let desc = await getInput(rl);
    console.log('Insert price of product: ');
    let price = await getInput(rl);
    let obj = objectBuilder(name, desc, price);
    addInFile(obj);
}

function listingProducts() {
    console.log(content);
}


module.exports = {rl, getInput, objectBuilder, addProduct, listingProducts};