var express = require("express");
var app = express(); 

app.use(express.static('public'));
app.use(express.json()); // para aplicaciones applitation/json
app.use(express.urlencoded({extended:true}));

app.set("view engine", "jade");

// routing //
app.get("/",function(req,res){  // GET
    res.render("index");
});

app.get("/login",function(req,res){  // GET
    console.log(req.body);
    res.render("login"); 
});

app.listen(3000);