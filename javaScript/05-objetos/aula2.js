class Pessoa {
    // Propriedades
    nome;
    idade;

    constructor(nome, idade) { // Obriga a, sempre que uma pessoa for instaciada, ele peça o nome e a idade.  
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    // Métodos
    descrever() {
         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`)
    }
}

const hugo = new Pessoa('Hugo', 33);
const pereira = new Pessoa('Pereira', 25);

console.log(hugo);
console.log(pereira);