const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const listaNumPares = lista.filter((element) => {
  return (element % 2 === 0);
})

// Diferentemente do forEach, que só percorre a lista, o filter retorna uma lista nova
// Isso tudo sem modificar a lista original
console.log(listaNumPares)
console.log('\n')
console.log(lista)