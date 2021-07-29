var http = require("http");
var fs = require("fs"); // importo modulo para leer archivos//

http
  .createServer(function (req, res) {
    // creo el servidor

    if(req.url.indexOf("favicon.ico") > 0){return;}

    fs.readFile("./index.html", function (err, html) {

      var parametros = [];
      var htmlString = html.toString(); // transformo el archivo html a cadena
      var variables = htmlString.match(/[^\{\}]+(?=\})/g);// busca en el html cadenas encerradas entre {}
      var nombre = "Luciano Pulido"; // esto se lo paso como parametro al front

      if(req.url.indexOf("?") > 0){
        var urlData = req.url.split("?");// me devuelve ['/','parametros']
        parametros = urlData[1].split("&")//['parametro1=valor1','parametro2=valor2','parametroN=valorN']
      }

      for(var i = 0 ; i<parametros.length ; i++){
          var parametro = parametros[i];
          var paramData = parametro.split("=");
          parametros[paramData[0]]= paramData[1];
      }


      for (var i = 0; i < variables.length; i++) {
        htmlString = htmlString.replace("{" + variables[i] + "}", parametros[variables[i]]); // remplaza la cadena del html, la variable buscada por el valor del javascript
      };

      res.writeHead(200, { "Content-Type": "text/html" }); // headers, en este caso de html
      res.write(htmlString);
      res.end(); // cierro la conexion
    }); // leo el archivo html
  })
  .listen(3000);
