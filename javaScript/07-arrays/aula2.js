const notas = [];

notas.push(10);
notas.push(10);
notas.push(7);
//notas.push(5);
//notas.push(8);
//notas.push(8);

let somaNotas = 0;

for (let nota = 0; nota < notas.length; nota++) {
    somaNotas += notas[nota];
}

const media = somaNotas / notas.length;

console.log('A média do aluno foi ' + media.toFixed(2) + '.');