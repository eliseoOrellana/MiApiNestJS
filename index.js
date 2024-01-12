// dependencias necesarias
const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql2");
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

//mysql

const db_con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "todo"
})


db_con.connect((err) => {
    if(err) {
        console.log("Database Connection Failed!", err);
    }else{
        console.log("Connected to Database");
    }
});



//Rutas

const todo = []

//obtener datos
app.get('/tareas', async(req, res) => {
    db_con.query('SELECT * from task', (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener tareas');
        }else{
            res.json(result);
        }
    });
});

//agregar tarea
app.post('/agregar-tarea', async(req, res) => {
    const {name} = req.body;
    db_con.query('INSERT INTO task (name) VALUES (?)', [name], (err, result) => {
        if (err) {
            res.status(500).send('Error al añadir una tarea');
        } else {
            res.redirect('/');
        }
    });
});

//actualizar tarea
app.put('/update-task/:id', async(req, res) => {
    const {name} = req.body;
    const id = req.params.id;
    db_con.query('UPDATE task SET name = ? WHERE id = ?', [name, id],(err, result) => {
        if (err) {
            res.status(500).send('Error la tarea');
        }else {
            res.send('Tarea actualizada');
        }
    });
});

//eliminar tarea
app.delete('/delete-task/:id', async(req, res) => {
    const {id} = req.params.id;
    db_con.query('DELETE FROM task WHERE id = ?', [id], (err, result) => {
        if (err) {
            res.status(500).send('Error al eliminar la tarea');
        }else{
            res.send('Tarea eliminada')
        }
    });
});


//Mensaje que quiero que salga cuando inicia correctamente
app.listen(3000, () => console.log("Servidor en puerto 3000"));


// Api de rick and morty

const data = []

async function streaming() {
    try{
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json();
        return data.results;
    }catch(error){
        console.log(error);
        return null;
    }}

async function takedata() {
    const data = await streaming();
    if(data){
        const characters = data.map((character) => character.name) 
        //console.log(characters)
        return characters;
    }else{
        console.log('No se puede obtener datos')
        return null;
    }
}

takedata();

