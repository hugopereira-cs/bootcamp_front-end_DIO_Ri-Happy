class Pessoa {
  constructor(name) {
    this.name = name
  }
}

const lista = [new Pessoa('Hugo'), new Pessoa('Maria'), new Pessoa('João'), new Pessoa('Ana')]

console.log(lista) // Mostra o objeto inteiro

// Converte o elemento no nome dele
const nomePessoa = lista.map((element, i) => {
  return `${i + 1} - ${element.name}` // Retorna o índice mais um e o nome de cada pessoa
})

console.log('\n')
console.log(nomePessoa) // Mostra apenas o nome das pessoas

// OBS.: Em Arrow Function de uma linha só, ela na precisa ter corpo, e o valor que vem logo após
// a seta, é o valor que será retornado. O exemplo anterior ficaria assim:[
// *******const nomePessoa = lista.map((element, i) => element.name)*******


// Exemplo prático, retornar os nomes para um documento HTML
const listaHtml = lista.map((element) => {
  return `
    <li>
      ${element.name}
    </li>
  `
})

console.log('\n')
console.log(listaHtml)


