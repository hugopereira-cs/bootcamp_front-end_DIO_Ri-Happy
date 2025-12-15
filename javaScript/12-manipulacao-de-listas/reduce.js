const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const somaNumeros = lista.reduce((previous, current) => {
  console.log(previous, current)
  return previous + current
}, 0) // 0 é o valor inicial, passar o valor inicial é muito importante em casos onde é passsada uma lista vazia

console.log(somaNumeros)

