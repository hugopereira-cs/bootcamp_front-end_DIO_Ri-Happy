// Programa que recebe N (quantidade de número) e seus respectivos valores
// Imprime o maior número par e o menor ímpar

const { gets, print } = require('./funcoes-auxiliares-ex2');

const n = gets();
let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < n; i++) {
  let numero = gets();

  if (numero % 2 === 0) {
    if (maiorPar === null || numero > maiorPar) {
      maiorPar = numero;
    }
  } else {
    if (menorImpar === null || numero < menorImpar) {
      menorImpar = numero;
    }
  }
}

print(`Maior número par: ${maiorPar}`);
print(`Menor número ímpar: ${menorImpar}`);
