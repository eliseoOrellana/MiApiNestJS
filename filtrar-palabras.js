function esLarga(word){
    return word.length > 5;
}

function filtrarPalabras(array, fn){
    try {
        let palabrasLargas = [];

        array.forEach(element => {
        if(fn(element)){
            palabrasLargas.push(element);
        }
    });
    return palabrasLargas;
        
    } catch (err) {
        console.error(err.message);
        return null;
    }
}

const palabras = ["mesa", "silla", "martillo", "computadora", "celular", "teclado"]

let palabrasFiltradas = filtrarPalabras(palabras, esLarga);

console.log(palabrasFiltradas);


