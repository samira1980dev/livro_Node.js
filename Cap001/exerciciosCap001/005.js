const readline = require('readline');

const leitura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitura.question('Digite a primeira nota: ', (n1) => {
    leitura.question('Digite a segunda nota: ', (n2) => {
        var media = (parseFloat(n1) + parseFloat(n2)) / 2;
        console.log('Sua média foi ' + media);

        if (media >= 6) {
            console.log('Você foi aprovado! Parabéns!');
        } else {
            console.log('Você não atingiu o mínimo, mas não desista!');
        } leitura.close();
    })
})