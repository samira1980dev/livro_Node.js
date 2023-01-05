let now = new Date();

let dayName = new Array ('domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado');
let monName = new Array ('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 
'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

console.log('Hoje é ' + dayName[now.getDate()]  + '-feira, dia ' + now.getDate() + ' de ' +
 monName[now.getMonth()] + ' de ' + now.getFullYear());