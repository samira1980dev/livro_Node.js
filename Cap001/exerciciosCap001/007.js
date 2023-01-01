const readline = require('readline');

const leitura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitura.question('Digite o número: ', (num) => {
    for (fat = 1; fat >= num; fat++){
        fat *= fat;
    };
    console.log(fat);
    leitura.close();
});