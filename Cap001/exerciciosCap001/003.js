const readline = require('readline');

const leitura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitura.question('Digite a tensão: ', (tensao) => {
    leitura.question('Digite a corrente: ', (corrente) => {
        var resistencia = tensao / corrente;
        console.log('A resistencia é de ' + resistencia);
        leitura.close();
    });
});