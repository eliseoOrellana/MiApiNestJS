function esPar(num){
    return num % 2 === 0;
}

function filtrarParses(array, fn){
    let numerosPares = [];
    
    array.forEach(element => {
        if(fn(element)){
            numerosPares.push(element);
        }     
    });
    return numerosPares;
}

let numeros = [1,2,3,4,5,6,7,8,9,10];

const numerosFiltrados = filtrarParses(numeros, (err, esPar));

console.log(numerosFiltrados);