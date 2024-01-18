function primero (segundo){
    setTimeout(function(){
        console.log('primero')
        segundo();
    },2000);   
}

function segundo(){
    console.log('segundo')
}

primero(segundo);


//devuelve por consola

// primero
// segudno