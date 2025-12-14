const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

lista.forEach((value, i, listRef) => {
  console.log(value, i, listRef) // Mostrará o elemento, o índice e a referência para a lista
})

// OBS.: O forEach é um pouco mais lento que o for, caso tenham muitos elementos, é recomendável utilizar o for