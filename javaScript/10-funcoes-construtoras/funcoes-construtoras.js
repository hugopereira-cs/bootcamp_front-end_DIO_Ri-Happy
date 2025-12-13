function Pessoa(nome, idade) { // Nome da função com letra maiúscula
  this.nome = nome;
  this.idade = idade;  
}

// Adicionando um método à função Pessoa
Pessoa.prototype.falar = function() {
  console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
}

const hugo = new Pessoa('Hugo', 33);

console.log(hugo);
hugo.falar();

// Também é possível utilizar uma sintaxe parecida com outras linguagens
// Mas, por baixo dos panos, esse método funciona exatamente como o de cima
class Pessoa2 {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  // Método (prototype)
  falar() {
    console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
  }
}

const maria = new Pessoa2('Maria', 25);

console.log(maria);
maria.falar();


