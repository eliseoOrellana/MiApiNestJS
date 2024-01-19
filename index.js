function primero(segundo) {
  setTimeout(function () {
    console.log("primero");
    segundo();
  }, 2000);
}

function segundo() {
  console.log("segundo");
}

primero(segundo);

//devuelve por consola

// primero
// segudno

// Ejemplo 1: Definición de Callback

function miFuncionPrincipal(callback) {
  console.log("Haciendo algo...");
  callback();
}

function miCallback() {
  console.log("¡Callback ejecutado!");
}

miFuncionPrincipal(miCallback);

// Resultado de la consola:
// Haciendo algo...
// ¡Callback ejecutado!

// Ejemplo 2: Callbacks con Funciones Anónimas

function operacionAsincronica(callback) {
  setTimeout(function () {
    console.log("Operación asincrónica completada");
    callback();
  }, 2000);
}

operacionAsincronica(function () {
  console.log("Callback ejecutado después de 2 segundos");
});

// Resultado de la consola:
// Operación asincrónica completada
// Callback ejecutado después de 2 segundos

// Ejercicio 1: Manejo de Tiempos

function retraso(tiempo, callback) {
  setTimeout(callback, tiempo);
}

retraso(3000, function () {
  console.log("¡Han pasado 3 segundos!");
});

// Resultado de la consola:
// ¡Han pasado 3 segundos!

// Ejercicio 2: Operación Asincrónica

function descargarArchivo(callback) {
  setTimeout(function () {
    console.log("Archivo descargado");
    callback();
  }, 4000);
}

descargarArchivo(function () {
  console.log("Proceso de descarga completado.");
});

// Resultado de la consola:
// Archivo descargado
// Proceso de descarga completado.
