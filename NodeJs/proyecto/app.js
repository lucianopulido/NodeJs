var express = require("express");

var app = express(); 

app.use(express.static('public'));

app.set("view engine", "jade");

// routing //
app.get("/",function(req,res){  // GET
    res.render("index");
});

app.get("/login",function(req,res){  // GET
    res.render("login"); 
   
});

app.listen(3000);