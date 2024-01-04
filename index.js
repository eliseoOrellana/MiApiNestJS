// dependencias necesarias
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

//Mensaje que quiero que salga cuando inicia correctamente
app.listen(port, () => console.log("Funciona"));

//tiene que ver con el otro tutorial arreglar
app.set("view engine", "ejs");

// rutas
app.use(express.static('src'));
app.use(require('./src/routes/index'));

// middleware
app.use(morgan('dev')); //permite utilizar morgan
app.use(express.urlencoded({extended: false})); // se utiliza para analizar las solicitudes en url, el extended permite solo cadenas simples
app.use(express.json());

// Funciones

const todo = []

app.post('/agregar-tarea', (req, res) => {
    const nuevaTarea = req.body.tarea;
    todo.push(nuevaTarea);
    res.redirect('/');
});

app.get('/tareas', (req, res) => {
    res.json({todo});
})

