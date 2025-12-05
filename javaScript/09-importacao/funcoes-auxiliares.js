function gets() {
  return 10;
}

function print(texto) {
  console.log(texto);
}

// Objeto literal, com dois atributos que, no caso, são funções;
// funções dentro de um objeto, são chamadas de métodos
module.exports = {
  gets: gets,
  print: print
};