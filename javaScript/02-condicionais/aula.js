const camisaRenanAzul = true;
const camisaLemaoAzul = false;

const numero = 100;

const numeroDivisivelPor5 = numero % 5 === 0;

console.log(numeroDivisivelPor5);

if (numeroDivisivelPor5 === 0) {
    console.log('O número é inválido!');
} else if (numeroDivisivelPor5) {
    console.log('O número ' + numero + ' é divisível por 5!');
} else {
    console.log('O número ' + numero + ' não é divisível por 5!');
}
