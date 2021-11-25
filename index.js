const { rl, getInput, addProduct } = require('./utils');

async function openMenu() {
    console.log('\nWelcome to console shop manager.\n' +
        '1 - Отобразить все товары.\n' +
        '2 - Добавить новый товар\n' +
        '3 - Удалить существующий товар\n' +
        '4 - Изменить товар\n' +
        '5 - Выйти');
    let input;
    input = await getInput(rl);
    switch (input) {
        case '1': {
            // show all tovars func
            openMenu();
            break;
        };
        case '2': {
            // Функция добавления товара
            addProduct();
            openMenu();
            break;
        };
        case '3': {
            openMenu();
            break;
            // delete tovar func
        };
        case '4': {
            openMenu();
            break;
            // edit tovar func
        };
        case '5': {
            console.log('Thanks for using out app.');
            rl.close();
        };
        default: {
            console.log('Такого пункта не найдено.');
            openMenu();
        }
    }
}

openMenu();