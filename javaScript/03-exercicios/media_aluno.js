/* Faça um algorítmo que calcule a media de 3 notas e a imprima junto a seguinte classificação: 
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, aprovação.
*/

const notaUm = 7;
const notaDois = 4;
const notaTres = 10;

const media = (notaUm + notaDois + notaTres) / 3;

if (media < 5) {
    console.log(
        'O aluno teve uma média de ' + media.toFixed(2) + ' e está reprovado.'
    );
} else if (media < 7) {
    console.log(
        'O aluno teve uma média de ' +
            media.toFixed(2) +
            ' e está de recuperação.'
    );
} else {
    console.log(
        'O aluno teve uma média de ' + media.toFixed(2) + ' e está aprovado.'
    );
}
