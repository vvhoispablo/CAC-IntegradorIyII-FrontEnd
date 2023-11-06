/* 
Estudiante > se aplica un descuento del 80% al precio base de $200. Su costo por entrada 
para estudiantes = $200 - ($200 * 80%) = $40

Trainee > se aplica un descuento del 50% al precio base de $200. Su costo por entrada 
para trainee = $200 - ($200 * 50%) = $100

Junior > se aplica un descuento del 15% al precio base de $200. Su costo por entrada 
para junior = $200 - ($200 * 15%) = $170

General > no se aplica ningún descuento, ya que el precio base de $200 se mantiene.
*/

function calcularTotal() {
  /* Declaración de Variables */
  var cantEntradas,
    total,
    categoria,
    entradaEstudiante,
    entradaTrainee,
    entradaJr,
    general;

  /* Captura de Valores */
  cantEntradas = document.getElementById('inputCantidad').value;
  categoria = document.getElementById('inputCategoria').value;

  /* Precios de entradas */
  entradaEstudiante = 200 - (200 * 80) / 100;
  entradaTrainee = 200 - (200 * 50) / 100;
  entradaJr = 200 - (200 * 15) / 100;
  general = 200;

  console.log('entra a la funcion');
  console.log('cant entradas ' + cantEntradas + ' categoria ' + categoria);

  /* Verifica si el valor ingresado es mayor a cero, y si es un número */
  if (cantEntradas > 0 && !isNaN(cantEntradas) && Number.isInteger(Number(cantEntradas))) {
    /* Verifica el tipo de entrada y calcula el total */
    if (categoria === 'Estudiante') {
      total = entradaEstudiante * cantEntradas;
    } else if (categoria === 'Trainee') {
      total = entradaTrainee * cantEntradas;
    } else if (categoria === 'Junior') {
      total = entradaJr * cantEntradas;
    } else if (categoria === 'General') {
      total = general * cantEntradas;
    }

    /* Muestra el total en la página */

    /* El cálculo del costo total se realiza multiplicando 
    el costo por entrada de la categoría seleccionada por la cantidad de entradas ingresada:
    costo total = costo por entrada * cantidad de entradas

    Se utiliza \u0024 para incluir el símbolo del dólar ($). En este caso, se está utilizando para denotar el costo de la moneda y se utiliza 
    antes del valor total para indicar que se trata de una cantidad de dinero, es decir, el costo total que el comprador debe pagar. 
    Por lo tanto, el mensaje muestra lo siguiente:
    */

    document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024' + total;
  } else {
    window.alert('Debe ingresar la cantidad de entradas en números enteros');
  }
}

function borrar() {
  /* Limpia los campos del formulario */
  document.getElementById('inputNombre').value = '';
  document.getElementById('inputApellido').value = '';
  document.getElementById('inputEmail').value = '';
  document.getElementById('inputCantidad').value = '';
  document.getElementById('inputCategoria').value = 'Estudiante';
  document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024';
}