import fs from 'node:fs/promises'
import fetch from 'node-fetch'

//Utilizar api rick and morty utilizando promesas

function ApiRick(){
    return fetch('https://rickandmortyapi.com/api/episode')
    .then((r) => {
        if(!r.ok){ //mandar mensaje si la api no funciona
            console.log('Error de la api')
        }
        return r.json();
    })
    .catch((error) => {
        console.log(error)
    });
}

ApiRick()
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error(error)
});

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

fs.readFile('./hola.txt', 'utf8')
    .then((c) => {
        console.log('Contenido: ', c);
    })
    .catch((err) => {
        console.log('Error: ', err)
    });


