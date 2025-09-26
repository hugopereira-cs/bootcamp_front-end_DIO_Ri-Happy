function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;
}

//escrevaMeuNome('Hugo');
//escrevaMeuNome('Pereira');

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Hugo') + ' É maior de idade.')
    } else {
        console.log(escrevaMeuNome('Hugo') + ' É menor de idade.')
    }
}

verificarIdade(3);