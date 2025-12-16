const fs = require('fs')
const path = require('path')
const filePath = path.resolve(__dirname, 'tarefas.csv') // 
const promessaDaLeituraDoArquivo = fs.promises.readFile(filePath)


// Async/Await é uma sintaxe moderna para trabalhar com promisses, deixando o código assíncrono com aparência de código síncrono, mais legível e fácil de manter.
// É o mais utilizado e recmendaddo
async function buscarArquivo() {
  try {
    const arquivo = await fs.promises.readFile(filePath)
    const textoDoArquivo = arquivo.toString('utf-8')
    console.log(textoDoArquivo)
  } catch(error) {
    console.log(error)
  } finally {
    console.log('Finalizou!')
  }
}

buscarArquivo()



// promessaDaLeituraDoArquivo
//   .then((arquivo) => arquivo.toString('utf-8'))
//   .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
//   .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
//     const [nome, feito] = linha.split(';')
//     return {
//       nome, feito: feito.trim() === 'true'
//     }
//   }))
//   .then((listaDeTarefas) => console.log(listaDeTarefas))
//   .catch((error) => console.log('Erro!', error))