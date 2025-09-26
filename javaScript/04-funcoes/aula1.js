function quadrado(valor) {
    return valor *valor;
}

const quadradoDeDez = quadrado(10);
const quadradoDeCinco = quadrado(5);

console.log(quadradoDeDez);
console.log(quadradoDeCinco, "\n");


function incrementarJuros(valor, percentualalJuros) {
    const valorDeAcrescimo = (percentualalJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));