const pessoa = {
    nome: 'Hugo P. A. da Silva',
    idade: 33,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`) // Usa-se crase para usar o método "this".
    }
};

// hugo.altura = 175; // adiciona a chave 'altura', (e atribui o valor a ela) , ao objeto 'hugo'
//delete hugo.nome;


pessoa.descrever();

// Forma mais dinâmica para acessar valores presentes no objeto
const atributo = 'idade'; // Acesso dinâmico através de uma string

console.log('\n', pessoa[atributo]);