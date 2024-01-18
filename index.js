import express, { json } from 'express'

const app = express()

app.listen(3000)

//callbacks

// function function_name(argument, callback)
//con arrow
// function function_name(argument, (callback_argument =>{
//     //contenido
// }));

//Temporizador, mandar mensaje cuando pase el tiempo, validacion de error

function Temporizador(callback){
    setTimeout(() => {
        const mensaje = ('Han pasado 2 segundos')
        callback(null,mensaje);
    }, 2000);

}

Temporizador((error, mensaje) => {
    if(error){
        console.error(error);
    }else{
        console.log(mensaje);
    }
})

//Ejercicio:
//La siguiente funcion recibe por parametro un callback y un array, debe aplicar la funcion
// a cada objeto dentro del array y devolver la string 'done';

let array3 = [{name : 'sergio'}, {name: 'fulano'}, {name:'pepe'}];
//----------------------------------------------------------------------------
function callback (obj){
    obj.name !== 'pepe' ? obj.name = 'pepenot' : null; /*esta funcion es un callback*/
    // separa si cumplen con la condicion
}
//-----------------------------------------------------------------------------
function testDeCallbacks(arr , cb){
    for(let i = 0; i < arr.length; i++){ //revisa uno por uno los registros de la array
        cb(arr[i]);
    }
    return console.log('done');
}

testDeCallbacks(array3,callback)
console.log(array3); //verificar que el callback modifico el array

//Este codigo da undefined, arreglar utilizar callback

// function suma(numero_uno,numero_dos){
//     setTimeout(function(){
//         var resultado = numero_uno + numero_dos;
//         return resultado;
//     }, 500);
// }
// var resultado = suma(2,5)
// console.log(resultado);

//

function suma(num1, num2, callback){
    setTimeout(() => {
        let resul = num1 + num2
        callback(resul);
    }, 500);
};
suma(2,5,function(resul){
    console.log(resul);
})

//

// Lectura de archivos: crear unafuncion que acepte la ruta de un archivo y un callback.
// utilizar el modulo fs para leer el contenido del archivo
// utilizar callback para ver el contenido del archivo o un mensaje de error

import fs from 'node:fs'
fs.readFile('./ej.txt', {encoding: 'utf-8'}, (err, num) => {
    console.log(num)
})

// Utilizar modulo http para hacer una solicitud a un servidor, crear una funcion que acepte la url y un callback, para despues llamar al callback con la respuesta del servidor o un mensaje de error.

