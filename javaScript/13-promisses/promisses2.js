// Lendo e manipulando um arquivo csv
// Um arquivo csv é um arquivo de dados, semelhante a um excel
// onde as colunas são separadas por (;) e a linhas são separadas por (Enter)

const fs = require('fs')

// Caso o arquivo esteja em um pasta diferente, use o path
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv') // 

const promessaDaLeituraDoArquivo = fs.promises.readFile(filePath)

promessaDaLeituraDoArquivo
  .then((arquivo) => arquivo.toString('utf-8'))
  .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1)) // devolve o arquivo em texto com quebra de linha e se cabeçalho
  .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
    const [nome, feito] = linha.split(';')
    return {
      nome, feito: feito.trim() === 'true' // trim() para tratar os espaços
    }
  }))
  .then((listaDeTarefas) => console.log(listaDeTarefas))
  .catch((error) => console.log('Erro!', error))
