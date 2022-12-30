const readline = require('readline');

const leitura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitura.question('Digite o primeiro lado: ', (l1) => {
    leitura.question('Digite o segundo lado: ', (l2) => {
        if (l1 === l2) {
            console.log('O quadrado tem área igual a ' + l1 * l2);
        } else {
            console.log('O retângulo tem área igual a ' + l1 * l2);
        }
        leitura.close();
    })
})