var express = require("express");
var app = express(); 

app.use("/public", express.static('public'));

app.use(express.json()); // para aplicaciones applitation/json // sirve para extraer y parsear datos
app.use(express.urlencoded({extended:true})); // sirve para extraer y parsear datos

app.set("view engine", "jade");

// routing //
app.get("/",function(req,res){  // GET
    res.render("index");
});

app.get("/login",function(req,res){  // GET
    res.render("login"); 
});


app.post("/users", function(req, res){
    console.log("Contraseña: "+ req.body.password);
    console.log("Email: "+req.body.email);
    res.send("Recibimos tus datos");
});
app.listen(3000);