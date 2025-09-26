/* Código de condição de pagamento:
1 - À vista Débito - 10% de desconto;
2 - À vista no Dinheiro ou PIX - 15% de desconto;
3 - Em duas vezes - preço normal da etiqueta sem juros;
4 - Acima d duas vezes - preço normal da etiqueta mais 10% de juros.
*/

const precoEtiqueta = 100;
const formaPagamento = 0;

let precoFinal = 0;

switch (formaPagamento) {
    case 1:
        precoFinal = precoEtiqueta * 0.90;
        break;
    case 2: 
        precoFinal = precoEtiqueta * 0.85;
        break;
    case 3:
        precoFinal = precoEtiqueta;
        break;
    case 4:
        precoFinal = precoEtiqueta * 1.10;
        break;
    default:
        console.log('Forma de pagamento inválida.');
}

console.log('O preço a ser pago é R$' + precoFinal.toFixed(2));