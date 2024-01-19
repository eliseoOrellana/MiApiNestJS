function duplicar(num){
    return num * 2;
}

function cuadrado(num){
    return num * num;
}

function restarCinco(num){
    return num - 5;
}

function transformarNumeros(array, fn){
    try {
        let numerosTransformados = [];

        array.forEach(element => {
            numerosTransformados.push(fn(null, element));
        });

        return numerosTransformados;
    } catch (error) {
        fn(error.message)
    }
}

numeros = [1,2,3,4,5];

const nuevosNumeros = transformarNumeros(numeros, (err, num) => {
    if(err) console.log(err);

    return num - 5;
});

console.log(nuevosNumeros);