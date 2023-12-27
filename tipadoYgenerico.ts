// Tipos Básicos
let numberVar: number = 5; // Declaración de una variable numérica
let stringVar: string = "Hola, TypeScript"; // Declaración de una variable de texto
let booleanVar: boolean = true; // Declaración de una variable booleana

// Arrays y Tuplas
let numberArray: number[] = [1, 2, 3]; // Declaración de un array de números
let tuple: [string, number] = ["Texto", 42]; // Declaración de una tupla con string y número

// Objetos
let person: { name: string, age: number } = { name: "Juan", age: 25 }; // Declaración de un objeto con propiedades name y age

// Funciones
function sum(a: number, b: number): number {
    return a + b; // Función que suma dos números y devuelve un número
}

// Interfaces
interface Person {
    name: string;
    age: number;
}

let usuario: Person = { name: "Maria", age: 30 }; // Declaración de una variable usando la interfaz Persona

// Funciones Genéricas
function identity<T>(valor: T): T {
    return valor; // Función genérica que devuelve el mismo valor que recibe
}

let numberIdentity: number = identity(5); // Uso de la función genérica con un número
let textIdentity: string = identity("Hello"); // Uso de la función genérica con un texto

// Clases Genéricas
class Container<T> {
    value: T;

    constructor(value: T) {
        this.value = value; // Clase genérica que contiene un valor del tipo especificado
    }
}

let containerNumber = new Container<number>(42); // Instancia de la clase Contenedor con un número
let containerText = new Container<string>("Texto"); // Instancia de la clase Contenedor con un texto

// Interfaz Genérica
interface ParOrdenado<T, U> {
    first: T;
    second: U;
}

let pair: ParOrdenado<number, string> = { first: 1, second: "dos" }; // Uso de la interfaz ParOrdenado con tipos numérico y de texto
