const fs = require('fs');

function leerArchivo(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    });
}


leerArchivo('archivo.txt')
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });