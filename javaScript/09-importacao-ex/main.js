/*
  Programa que recebe os 5 maiores números sorteados e mostra o maior. O primeiro número da lista é o seu tamanho.
*/

const { gets, print } = require('./funcoes-auxiliares');

const tamanhoLista = gets();
const numerosSorteados = [];
let maiorValorEncotrado = 0;

for (let i = 0; i < tamanhoLista; i++) {
  const numeroSorteado = gets();
  if (numeroSorteado > maiorValorEncotrado) {
    maiorValorEncotrado = numeroSorteado;
  }
}

print(maiorValorEncotrado);