// Programa que calcula e imprime o salário a ser trandferido para um funcionário
// Recebe o valor do salário bruto e o adicional dos benefícios
// O cálculo é o seguinte:
// Valor do salário bruto - percentual de imposto mediante faixa salarial + adicional dos benefícios
// Para calcular o percentual de imposto segue as alíquotas:

//  De R$ 0.00 a R$ 1100.00 = 5%
//  De R$ 1100.01 a 2500.00 = 10%
//  Maior que 2500.00 = 15%

const { gets, print } = require('./funcoes-auxiliares-ex3');

const salarioBruto = gets();
const beneficios = gets();

function calcularPorcentagem(valor, percentual) {
  return valor * (percentual / 100);
}

function pegarAliquota(salario) {
  if (salarioBruto <= 1100) {
    return 5;
  } else if (salarioBruto <= 2500) {
    return 10;
  } else {
    return 15;
  }  
}
const aliquotaImposto = pegarAliquota(salarioBruto)
const valorImposto = calcularPorcentagem(salarioBruto, aliquotaImposto);
const salarioLiquidoMaisBeneficios = salarioBruto - valorImposto + beneficios;

print(salarioLiquidoMaisBeneficios);