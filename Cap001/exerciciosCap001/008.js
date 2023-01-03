const readline = require('readline');

const leitura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


leitura.question('Digite o primeiro número: ', (n1) => {
    leitura.question('Digite o segundo número: ', (n2) => {
        leitura.question('Digite o terceiro número: ', (n3) => {
            let maior = parseInt(n1);
            let menor = parseInt(n2);
            let meio = parseInt(n3);
            if (n1 > n2 && n1 > n3) {
                maior = n1;
                if (n2 > n3) {
                    meio = n2;
                    menor = n3;
                } else {
                    meio = n3;
                    menor = n2;
                }
            }

            if (n2 > n3 && n2 > n1) {
                maior = n2;
                if (n1 > n3) {
                    meio = n1;
                    menor = n3;
                } else {
                    meio = n3;
                    menor = n1;
                }
            }

            if (n3 > n2 && n3 > n1) {
                maior = n3;
                if (n1 > n2) {
                    meio = n1;
                    menor = n2;
                } else {
                    meio = n2;
                    menor = n1;
                }
            }

            console.log('O maior número é ' + maior + ', depois ' + meio + ' e por fim ' + menor);
            leitura.close();
            
        })
    })
})