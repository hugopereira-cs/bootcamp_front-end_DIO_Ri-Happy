// Declaração Explícita - Possui this próprio
function funcao1() {
  console.log(this)
}

const funcao2 = () => {
  console.log(this)
}

const hugo = {
  nome: 'Hugo',
  funcao1: funcao1,
  funcao2: funcao2
}

hugo.funcao1()
console.log('\n')
hugo.funcao2()