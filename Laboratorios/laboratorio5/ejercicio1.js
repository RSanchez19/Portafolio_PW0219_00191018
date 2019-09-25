function tipoDato(array) {
  for (var i = 0; i < array.length; i++) {
    var tipo_dato = typeof array[i];
    console.log(tipo_dato);
  }
}

var array1 = ["hola", 1, null, true, Math, Symbol("id")];
tipoDato(array1);
