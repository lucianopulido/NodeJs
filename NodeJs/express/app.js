var express = require("express");// importo el modulo de express

var app = express(); // creo la app de express 

app.get("/",function(req,res){
    res.send("Hola mundo");
    res.end();
});

app.listen(3000);// pongo a correr los hilos y a escuchar