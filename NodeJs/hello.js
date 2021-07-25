var http = require("http");

var manejador = function (solicitud, respuesta) {
console.log("hello word");
respuesta.end("hola mundo");
};

var servidor = http.createServer(manejador);

servidor.listen(3000);