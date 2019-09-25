function ordenar(lista) {
  for (var i = 0; i < lista.length - 1; ) {
    for (var j = 0; j < lista.length - 1; j++) {
      if (lista[j + 1] < lista[j]) {
        var aux = lista[j];
        lista[j] = aux;
      }
    }
  }
  return lista;
}

console.log(ordenar([43242, 1, 54325, 2, 3]));
