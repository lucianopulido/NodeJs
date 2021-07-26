var http = require("http");
var fs = require("fs"); // importo modulo para leer archivos//

http.createServer(function (req, res) {
    // creo el servidor

    fs.readFile("./index.html", function (err, html) {
      res.write(html);
      res.end();
    }); // leo el archivo html
  }).listen(3000);
