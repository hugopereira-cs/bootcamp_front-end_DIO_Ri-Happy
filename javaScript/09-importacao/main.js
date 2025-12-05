// Essas funções são um exemplo real de como os desafios de código na DIO funcionam na plataforma.
// Usando essas funçoes, é possível usar nossos desafios na nossa máquina para debugar.

const funcoes = require('./funcoes-auxiliares')

console.log(funcoes.gets());

// Object Destructing

const { gets, print } = require('./funcoes-auxiliares');

print(gets());