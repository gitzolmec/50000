function saludo(nombre) {
  console.log("hola como estas " + nombre);
  console.log(`hola ${nombre} como estas`);
}

saludo("Mate");

const saludo2 = (nombre, mama) => {
  console.log("hola como estas " + nombre);
  console.log(`hola ${nombre} como estas`);
  console.log(`hola ${nombre} como estas y como esta tu mama ${mama}`);
};

saludo2("Titin", "Caro");
