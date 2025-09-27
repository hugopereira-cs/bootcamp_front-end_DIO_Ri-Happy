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

// Função que recebe objetos
function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

const hugo = new Pessoa('Hugo', 33);
const pereira = new Pessoa('Pereira', 23);

compararPessoas(hugo, pereira);