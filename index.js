import fs from 'node:fs/promises'

//Ejemplo: Crear un archivo de texto plano usando un objeto Promise en Node.js.

let writefileprom = new Promise((resolve, reject) => {
    fs.writeFile('hola.txt', 'Mensaje', (error) => {
        if(error){
            reject(error);
        }else{
            resolve();
        }
    });
});

writefileprom
.then(() => {
    console.log('Se logro la escritura del archivo');
})
.catch((error) => {
    console.log('Escritura no lograda, error: ', error)
});

// Leer txt con con promesa


function readfile(r){
    return fs.readFile(r, 'utf-8');
}

readfile('./hola.txt')
    .then((c) => {
        console.log('Contenido: ', c);
    })
    .catch((err) => {
        console.log('Error: ', err)
    });

// ejercicio de callback con promesasa

// let array3 = [{name : 'sergio'}, {name: 'fulano'}, {name:'pepe'}];

// function buscarpepe(){
//     for(let i=0; i<arr.length; i++){
//         return console.log('Pepe buscado')
//     }
// }