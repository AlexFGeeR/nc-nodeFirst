const readline = require("readline");
const { addInFile, updateFile, content } = require('./files');

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
    return {id: Number(Object.keys(content).length + 1), name: name, desc: desc, price: price }
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

async function searchProduct() {
    console.log('По какому критерии будем искать товар?\n' +
        '1 - id\n' +
        '2 - name\n');
    let target = await getInput(rl);
    switch (target) {
        case '1': {
            console.log('Введите необходимый id:');
            let answer = await getInput(rl);
            return content.findIndex(product => product.id === Number(answer));
        }
        case '2': {
            console.log('Введите необходимое поле name:');
            let answer = await getInput(rl);
            return content.findIndex(product => product.name === String(answer));
        }
        default: {
            console.log('Такого варианта не было.');
            await editProduct();
            break;
        }
    }
}

async function resetIds() {
    for( let i = 0; i < content.length; i++ ) {
        content[i].id = i + 1;
    }
}

async function deleteProduct() {
    let prodId = await searchProduct(); // -1 bug
    if( prodId === -1 ) {return console.log('Element not found');}
    content.splice(prodId, 1);
    await resetIds();
    updateFile(content);
    console.log('Удаление прошло успешно!');
}

async function editProduct() {
    let prodId = await searchProduct();
    if( prodId === -1 ) {return console.log('Element not found');}
    console.log('Что требуется изменить в продукте?\n' +
        '1 - name\n' +
        '2 - desc\n' +
        '3 - price');
    let answer = await getInput(rl);
    switch ( answer ) {
        case '1': {
            console.log('Введите новое имя товара:');
            let newName = await getInput(rl);
            content[prodId].name = String(newName);
            console.log('Название товара успешно изменено.');
            break;
        }
        case '2': {
            console.log('Введите новое описание товара:');
            let newDesc = await getInput(rl);
            content[prodId].desc = String(newDesc);
            console.log('Описание товара успешно изменено.');
            break;
        }
        case '3': {
            console.log('Введите новую стоимость товара.');
            let newPrice = await getInput(rl);
            content[prodId].price = String(newPrice);
            break;
        }
        default: {
            console.error('\nТакого варианта не было.\n');
            await editProduct();
        }
    }
}

module.exports = {rl, getInput, objectBuilder, addProduct, listingProducts, editProduct, deleteProduct};