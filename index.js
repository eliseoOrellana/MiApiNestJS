// lectura de archivos

import fs from 'node:fs/promises'
import fetch from 'node-fetch'

async function readhola(r) {
    try {
        const con = await fs.readFile(r, 'utf8');
        return con
    }catch (err){
        throw new Error('Error al leer el archivo');
    }
}

const ar = 'hola.txt';
readhola(ar)
.then((con) => {
    console.log('Contenido del archivo: ', con)
})
.catch((err) => {
    console.error(err);
})


//Utilizar api rick and morty utilizando promesas

async function ApiRick(){
    try{
        const r = await fetch('https://rickandmortyapi.com/api/episode')
        if(!r.ok){ //mandar mensaje si la api no funciona
            console.log('Error de la api')
        }
        const d = await r.json();
        return d;
        }catch(error) {
            console.log(error)
        }
}

ApiRick()
.then((d) => {
    console.log(d);
})
.catch((error) => {
    console.error(error)
});