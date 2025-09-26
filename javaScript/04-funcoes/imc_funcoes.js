
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2); // Math.pow(altura, 2) -> autura elevado ao expoente 2. 
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Seu IMC é ' + imc.toFixed(2) + ' e você está abaixo do peso.';
    } else if (imc < 25) {
        return 'Seu IMC é ' + imc.toFixed(2) + ' e você está no peso normal.';
    } else if (imc < 30) {
        return 'Seu IMC é ' + imc.toFixed(2) + ' e você está acima do peso.';
    } else if (imc < 40) {
        return 'Seu IMC é ' + imc.toFixed(2) + ' e você está obeso.';
    } else {
        return 'Seu IMC é ' + imc.toFixed(2) + ' e você está em um estágio de obesidade grave, tenha cuidado!';
    }

}
// Main
(function () { // Função não nomeada, além de não ter nome, ela executa e logo após, se auto invoca.
    const peso = 76;
    const altura = 1.75;
    
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();

