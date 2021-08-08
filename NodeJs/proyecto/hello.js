var http = require("http"); // este modulo se encarga de servir o comunicar las apps webs, equivalente a express//

var manejador = function (solicitud, respuesta) {
console.log("hello word");
respuesta.end("hola mundo");
};

var servidor = http.createServer(manejador);

servidor.listen(3000);