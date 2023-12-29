// Archivo: generics.ts

// Los tipos genéricos permiten escribir funciones y clases que pueden trabajar con varios tipos de datos.
// Se utilizan para crear código flexible y reutilizable.

// Ejemplo de función genérica que devuelve el primer elemento de un array.
function obtenerPrimerElemento<T>(array: T[]): T | undefined {
    return array.length > 0 ? array[0] : undefined;
  }
  
  // Uso de la función con un array de números.
  const primerNumero: number | undefined = obtenerPrimerElemento([1, 2, 3]);
  
  // Uso de la función con un array de cadenas.
  const primeraCadena: string | undefined = obtenerPrimerElemento(['uno', 'dos', 'tres']);
  
  // Ejemplo de clase genérica que almacena un valor de un tipo específico.
  class Contenedor<T> {
    private valor: T;
  
    constructor(valor: T) {
      this.valor = valor;
    }
  
    obtenerValor(): T {
      return this.valor;
    }
  }
  
  // Uso de la clase con un número.
  const contenedorNumero = new Contenedor<number>(42);
  const valorNumero: number = contenedorNumero.obtenerValor();
  
  // Uso de la clase con una cadena.
  const contenedorCadena = new Contenedor<string>('Hola');
  const valorCadena: string = contenedorCadena.obtenerValor();
  
  // Los tipos genéricos proporcionan flexibilidad sin sacrificar el soporte estático de tipos en TypeScript.
  