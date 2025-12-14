// É possível passar uma função para outra função
function falarMeuNome () {
  console.log('Meu nome é Hugo')
}

function falarMeuNomeCompleto(falarMeuNome) {
  falarMeuNome()
  console.log('Pereira')
}

falarMeuNomeCompleto(falarMeuNome)