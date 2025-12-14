function soma(x) {
  return function (y) {
    return x + y;
  }
}

// Valor de x
const somaParcial = soma(10)

// Invocando a função passando valores para y, pois a função "se lembra" do valor de x, passado anteriormente
console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))