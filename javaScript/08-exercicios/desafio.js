function organizarEstoque(entrada) {
    const estoque = {}; 

    const lojas = entrada.split(","); 

    for (let loja of lojas) {
        const partes = loja.split(":"); 
        const codigo = partes[0].trim(); 
        const quantidade = parseInt(partes[1].trim()); 

        // TODO: Atualize o estoque com a quantidade recebida para o código do item
        // Se o código já existir, soma a nova quantidade à existente, caso contrário, cria o código com a quantidade
        
        if (codigo in lojas) {
          estoque[codigo] += quantidade;
        } else {
          estoque[codigo] = quantidade;
        }
    }

    let resultado = ""; 

    // TODO: Itere sobre o objeto 'estoque' e crie a string de saída no formato "codigo:quantidade":
       // Adicione cada item ao resultado, separado por vírgula
    
    for (let codigo in estoque) {
      resultado += `${codigo}:${estoque[codigo]},`;   
    }
    
    if (resultado.length > 0) {
        // Remove a última vírgula (extra)
        resultado = resultado.slice(0, -1); 
    }

    return resultado; 
}

// Função principal para ler a entrada e exibir o resultado
function main() {
    const entrada = gets().trim(); 
    print(organizarEstoque(entrada)); 
}

// Chama a função principal para rodar o código
main();