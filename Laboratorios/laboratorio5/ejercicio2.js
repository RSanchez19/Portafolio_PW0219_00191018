function sumarArreglo(array) {
  for (var i = 0; i < array.length - 1; i++) {
    var suma = array[i] + array[i + 1];
  }
  var promedio = suma / array.length - 1;
  console.log(suma);
  console.log(promedio);
}

array1 = [1, 1, 1, 1, 1];
sumarArreglo(array1);
