const readline = require('readline');

const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

teclado.question('Digite o seu nome: ', (resposta) => {
    console.log('Olá ' + resposta);
    teclado.close();
});