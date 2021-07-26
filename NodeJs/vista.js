var http = require("http");
var fs = require("fs"); // importo modulo para leer archivos//

http
  .createServer(function (req, res) {
    // creo el servidor

    fs.readFile("./index.html", function (err, html) {
      var htmlString = html.toString(); // transformo el archivo html a cadena
      var variables = htmlString.match(/[^\{\}]+(?=\})/g);// busca en el html cadenas encerradas entre {}
      var nombre = "Luciano Pulido"; // esto se lo paso como parametro al front

      for (var i = 0; i < variables.length; i++) {
        var value = eval(variables[i]); // busca en el codigo javascript las variables del html y guarda el valor en value
        htmlString = htmlString.replace("{" + variables[i] + "}", value); // remplaza la cadena del html, la variable buscada por el valor del javascript
      };

      res.writeHead(200, { "Content-Type": "text/html" }); // headers, en este caso de html
      res.write(htmlString);
      res.end(); // cierro la conexion
    }); // leo el archivo html
  })
  .listen(3000);
