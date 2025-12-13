// Formas de Criação de Um Objeto Baseado Em Outro
// 1. Literal
const pessoa = {
  genero: 'masculino',
}

const hugo = {
  nome: 'Hugo',
  __proto__: pessoa
}

console.log(hugo.nome)
console.log(hugo.genero)

// 2. Object.create

const pessoa2 = {
  genero: 'masculino',
}

const hugo2 = Object.create(pessoa2)

hugo2.nome = 'Hugo'

console.log(hugo2.nome)
console.log(hugo2.genero)
