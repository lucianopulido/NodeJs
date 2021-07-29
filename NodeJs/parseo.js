function parse(req){
    var parametros = [];

    if(req.url.indexOf("?") > 0){
        var urlData = req.url.split("?");// me devuelve ['/','parametros']
        parametros = urlData[1].split("&")//['parametro1=valor1','parametro2=valor2','parametroN=valorN']
      }

      for(var i = 0 ; i<parametros.length ; i++){
        var parametro = parametros[i];
        var paramData = parametro.split("=");
        parametros[paramData[0]]= paramData[1];
    }
    
    return parametros;
}

module.exports.parse = parse;