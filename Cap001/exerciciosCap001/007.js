const readline = require('readline');

const leitura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitura.question('Digite o número: ', (num) => {
    let resultado = num;
    for (i = 1; i < num; i++){
        resultado *= i;
        
    };
    console.log(resultado);
    
    leitura.close();
});