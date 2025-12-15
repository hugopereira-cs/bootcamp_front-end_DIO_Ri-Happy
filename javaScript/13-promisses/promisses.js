const promessaNumeroQualquer = new Promise((resolve, reject) => {
  setTimeout(() => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
  }, 1000) // A cada 1000 ms (1 segundo), gera um número e responde
})

console.log('Vai filhão!') // Mostrará a mensagem e, 1 segundo depois, exibirá o número sorteado

// promessaNumeroQualquer
//   .then((value) => {
//     console.log(value)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     console.log('Finalizou!')
//   })

// É possível encadear os then(); sendo possível utilizar quantos forem necessários na estrutura.
promessaNumeroQualquer
  .then((value) => {
    console.log(value)
    return value + 10 // Retorna o valor mais 10 para o próximo then()
  })
  .then((value) => {
    console.log(value)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log('Finalizou!')
  })