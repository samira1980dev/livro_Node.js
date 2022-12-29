const readline = require('readline');

const leitura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitura.question('Digite um valor: ', (valor) => {
    leitura.question('Digite o prefixo: ', (pref) => {
        console.log('Resultado: ');

        
        if (pref === 'k') {      
            var num = parseInt(valor) * 10**3;
            console.log(num * 10**-3 + ' M');
            console.log(num * 10**-6 + ' G');
            console.log(num * 10**-9 + ' T');

        } else if (pref === 'M') {
            var num = parseInt(valor) * 10**6;
            console.log(num * 10**-3 + ' k');
            console.log(num * 10**3 + ' G');
            console.log(num * 10**6 + ' T');
        } else if (pref === 'G') {
            var num = parseInt(valor) * (10**9);
            console.log(num * 10**3 + ' k');
            console.log(num * 10**-6 + ' M');
            console.log(num * 10**-12 + ' T');
        } else if (pref === 'T') {
            var num = parseInt(valor) * 10**12;
            console.log(num * 10**-3 + ' k');
            console.log(num * 10**-9 + ' G');
            console.log(num * 10**-6 + ' M');
        }
        leitura.close();
    })
})