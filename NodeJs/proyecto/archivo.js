var http = require("http");
var fs = require("fs"); // importo modulo para leer archivos//

http.createServer(function (req, res) {
    // creo el servidor

    fs.readFile("./index.html", function (err, html) {
      res.writeHead(200,{"Content-Type":"application/json"})
      res.write(JSON.stringify({nombre: "Luciano", username: "LucianoPulido"}));
      res.end();// cierro la conexion
    }); // leo el archivo html
  }).listen(3000);
