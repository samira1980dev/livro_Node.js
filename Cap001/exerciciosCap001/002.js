const readline = require('readline');

const leitura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitura.question('Qual o preço do produto? ', (pro) => {
    leitura.question('Qual a quantidade de produtos? ', (qtd) => {
        if (qtd === 0) {
            console.log('É 0, né? cabeça!');
        } else {
            leitura.question('Qual o desconto dado? ', (desc) => {
                var res = parseFloat(pro) * parseInt(qtd);
                var desconto = res - (res * (desc/100));
                console.log(desconto);
                leitura.close()

            });
        }
    });
});