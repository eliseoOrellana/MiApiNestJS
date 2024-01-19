const data = [
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    year: 1967,
  },
  {
    titulo: "To Kill a Mockingbird",
    autor: "Harper Lee",
    year: 1960,
  },
  {
    titulo: "The Great Gatsby",
    autor: "F. Scott Fitzgerald",
    year: 1925,
  },
];

function getData(){
    return data;
}

getData();

//esto devuelve los linro osea el arreglo de objetos llamado data

// -----------------------------------------------------

function getData(){
    setTimeout(()=>{
        return data;
    },2000)
}

console.log(getData());

//esto devuelve lo mismo pero luego de dos segundos por el setTimeout
