var express = require("express");// importo el modulo de express

var app = express(); // creo la app de express 

app.set("view engine", "jade");

app.get("/",function(req,res){
    res.render("index",{hola:"Hola Luciano"});
    res.end();
});

app.listen(3000);// pongo a correr los hilos y a escuchar