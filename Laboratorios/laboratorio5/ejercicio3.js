function buscarOcurrencias(numero, array) {
  var buscarNumero = numero;
  var contador = 0;
  for (i = 0; i < array.length; i++) {
    if (buscarNumero == array[i]) {
      contador++;
    }
  }
  console.log("Ocurrencias: " + contador);
}

var arrayNumeros = [1, 2, 3, 4, 5, 6, 1, 8, 1];
buscarOcurrencias(1, arrayNumeros);
