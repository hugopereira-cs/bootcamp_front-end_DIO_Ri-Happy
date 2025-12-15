const lista = [1, 2, 3]

console.log(lista.join('/'))

// Exemplo prático - trabalhando com HTML
const lista2 = [{nome: 'Hugo'}, {nome: 'Maria'}, {nome: 'João'}, {nome: 'Helena'}]

// Combinando métodos
// map transforma a lista em uma lista de nomes
console.log(lista2.map((e) => e.nome).join(', '))

// Combinando mais métodos
console.log(
  lista2.map(e=> e.nome)
    .filter((e) => e.startsWith('H'))
    .join(', '))


// Exemplo prático em HTML
const elementosEmHtml = lista2.filter((e) => e.nome.startsWith('H')) // Retornará somente os nomes iniciado por H
  .map(e=> `<li>${e.nome}</li>`) // Para cada nome retornado pela função filter, elvolve-o com a tag <li>
  .join('') // Junta as tags sem separação

console.log(elementosEmHtml)