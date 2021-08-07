var express = require("express");

var app = express(); 

app.set("view engine", "jade");

// routing //
app.get("/",function(req,res){  // GET
    res.render("index");
    res.end();
});

app.get("/:nombre",function(req,res){  // GET
    res.render("form",{nombre:req.params.nombre}); // el segundo parametro es para pasarle un parametro de la url a una vista
    res.end();
});


app.post("/",function(req,res){ // POST
    res.render("form")
});

app.listen(3000);