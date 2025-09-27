class Carro {
    marca;
    cor;
    gastoMedio;

    constructor (marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio
    }

    calcularGasto(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedio * precoCombustivel
    }
}

const uno = new Carro('Fiat', 'Preto', 1/12); // 1/12 para fazer um Km
uno.calcularGasto(70, 5);
console.log(uno.calcularGasto(70, 5).toFixed(2));

const palio = new Carro('Fiat', 'Prata', 1/10);
console.log(palio.calcularGasto(70, 5).toFixed(2));