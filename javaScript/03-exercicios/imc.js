const peso = 130;
const altura = 1.75;

const imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log('Seu IMC é ' + imc.toFixed(2) + ' e você está abaixo do peso.');
} else if (imc < 25) {
    console.log('Seu IMC é ' + imc.toFixed(2) + ' e você está no peso normal.');
} else if (imc < 30) {
    console.log('Seu IMC é ' + imc.toFixed(2) + ' e você está acima do peso.');
} else if (imc < 40) {
    console.log('Seu IMC é ' + imc.toFixed(2) + ' e você está obeso.');
} else {
    console.log('Seu IMC é ' + imc.toFixed(2) + ' e você está em um estágio de obesidade grave, tenha cuidado!');
}