function fatorial(numero) {
    // 5
    let resultado = 1; // 1
    while (numero > 1) {
      resultado = resultado * numero;
      // resultado = 1 * 5;
      // resultado = 1 * 5 * 4 * 3 * 2
      numero = numero - 1; // numero = 4
      // numero = 3
      // numero = 2
      // numero = 1
    }
    return resultado;
  }

  let fatorialdoNumero = 4;
  let resultadoFatorial = fatorial(fatorialdoNumero);
  console.log(
    "O fatorial de " + fatorialdoNumero + "e: " + resultadoFatorial
  );