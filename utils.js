const readline = require("readline");

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
    return { name: name, desc: desc, price: price }
}


module.exports = {rl, getInput};