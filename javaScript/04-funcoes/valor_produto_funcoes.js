const precoEtiqueta = 100;
const formaPagamento = 5;
let precoFinal = 0;

function aplicarDesconto(valor, desconto) {
    return valor - valor * (desconto / 100);
}
function aplicarJuros(valor, juros) {
    return valor + valor * (juros / 100);
}

switch (formaPagamento) {
    case 1:
        precoFinal = aplicarDesconto(precoEtiqueta, 10);
        break;
    case 2:
        precoFinal = aplicarDesconto(precoEtiqueta, 15);
        break;
    case 3:
        precoFinal = aplicarDesconto(precoEtiqueta, 0);
        break;
    case 4:
        precoFinal = aplicarJuros(precoEtiqueta, 10);
        break;
    default:
        console.log('Forma de pagamento inválida.');
}

console.log('O preço a ser pago é R$' + precoFinal.toFixed(2));
