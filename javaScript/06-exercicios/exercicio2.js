class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {
        const imc = this.calcularImc();
        
        if (imc < 18.5) {
            return 'Seu IMC é ' + imc.toFixed(2) + ' e você está abaixo do peso.';
        } else if (imc < 25) {
            return 'Seu IMC é ' + imc.toFixed(2) + ' e você está no peso normal.';
        } else if (imc < 30) {
            return 'Seu IMC é ' + imc.toFixed(2) + ' e você está acima do peso.';
        } else if (imc < 40) {
            return 'Seu IMC é ' + imc.toFixed(2) + ' e você está obeso.';
        } else {
            return 'Seu IMC é ' + imc.toFixed(2) + ' e você está em um estágio de obesidade grave, tenha cuidado!';
        }
    }
}

const jose = new Pessoa('José', 76, 1.75);
console.log(jose.classificarImc());

const hugo = new Pessoa('Hugo', 75, 1.75);
console.log(hugo.classificarImc());