var http = require("http");
var fs = require("fs"); // importo modulo para leer archivos//
var parseo = require("./parseo.js");

http
  .createServer(function (req, res) {
    // creo el servidor

    if(req.url.indexOf("favicon.ico") > 0){return;}

    fs.readFile("./index.html", function (err, html) {

      var htmlString = html.toString(); // transformo el archivo html a cadena
      var variables = htmlString.match(/[^\{\}]+(?=\})/g);// busca en el html cadenas encerradas entre {}
      var nombre = ""; // esto se lo paso como parametro al front

      parametros = parseo.parse(req);

      for (var i = 0; i < variables.length; i++) {
        htmlString = htmlString.replace("{" + variables[i] + "}", parametros[variables[i]]); // remplaza la cadena del html, la variable buscada por el valor del javascript
      };

      res.writeHead(200, { "Content-Type": "text/html" }); // headers, en este caso de html
      res.write(htmlString);
      res.end(); // cierro la conexion
    }); // leo el archivo html
  })
  .listen(3000);
