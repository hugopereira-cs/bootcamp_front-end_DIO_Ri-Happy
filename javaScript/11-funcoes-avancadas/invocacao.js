// Invocação Direta
function teste() {
  console.log('Teste')
}

teste()

// Uma função é um objeto, e como todo objeto, ela possui métodos
// Invocação com método apply(). Aceita dois argumentos, sendo o primeiro o this. e o segundo, um array de argumentos
const pessoa = {
  nome: 'Hugo',
  idade: 33
}

// Função está fora do contexto do objeto,
function gritar(prefixo) {
  console.log(prefixo, this.nome)
}

// O apply coloca a função no contexto do objeto
gritar.apply(pessoa, ['Olá'])

// Invocação com método call()
// Muito parecida com apply, porém, o argumento não é passado em um array, e ela não tem limite de argumentos
gritar.call(pessoa, 'Olá')