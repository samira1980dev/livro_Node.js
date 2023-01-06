let num = Array();
let todos = Array();

for(let i = 0; i < 200; i++) {
    todos.push(num[i] = Math.floor(Math.random() * 1000 + 1));
    
}
console.log(todos);
let max = todos.reduce(function(a, b) {
    return Math.max(a, b)
})
console.log('---------');
console.log('O maior número do vetor é: ' + max);