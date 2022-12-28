const readline = require ('readline');

const leitura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitura.question('Digite o primeiro número: ', (n1) => {
    leitura.question('Digite o segundo valor: ', (n2) => {
        leitura.question('Digite o terceiro número: ', (n3) => {
            leitura.question('Digite o último número: ', (n4) => {
                var media = (parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4))/4;
                console.log(media);
leitura.close();
            })
        })
    })
})