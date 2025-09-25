const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 100;

console.log(
    'O valor gasto nesta viagem será R$' +
        ((precoCombustivel * distanciaEmKm) / kmPorLitro).toFixed(2) +
        '.'
);

/* Faça um progrma para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor gasto que será gasto para realizar esta viagem.
*/
