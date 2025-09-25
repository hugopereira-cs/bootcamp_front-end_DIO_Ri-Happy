/* Faça um progrma para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - Tipo do combustível que está no carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem; 

Imprima no console o valor gasto que será gasto para realizar esta viagem.

*/

const precoEtanol = 5.79;
const precoGasolina = 5.95;
const kmPorLitro = 10;
const distanciaEmKm = 100;

const isGasolina = true;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
let gastoTotal = 0;

if (isGasolina) {
    gastoTotal = litrosConsumidos * precoGasolina;
} else {
    gastoTotal = litrosConsumidos * precoEtanol;
}

console.log('O gasto total nesta viagem será R$' + gastoTotal.toFixed(2) + '.');
