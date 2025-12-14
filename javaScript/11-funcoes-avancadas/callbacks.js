function adicao(x, y) {
  return x + y
}

function multiplicacao(x, y) {
  return x * y
}

function calcular(x, operacao, y) {
  console.log(operacao(x, y))
}

calcular(10, adicao, 20)
calcular(10, multiplicacao, 20)

// Exemplo prático
// Passando um a função, como parâmetro, que será executada em um momento oportuno
document.getElementById('btn1').addEventListener('click', () => {
  console.log('Clicous!')
})