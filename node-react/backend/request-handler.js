const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const enrutador = require('./enrutador');

module.exports = (req, res) => {
    //1. Obtener url desde el objeto request
    const urlActual = req.url;
    const urlParseada = url.parse(urlActual,true);

    //2. Obtener la ruta
    const ruta = urlParseada.pathname;

    //3. Quitar slash
    const rutaLimpia = ruta.replace(/^\/+|\/+$/g, "");

    //3.1 Obtener el método HTTP
    const metodo = req.method.toLowerCase();
    
    //3.1.1 dar permisos de CORS escribiendo los headers
    res.setHeader("Access-Control-Allow-Origin" , "*");
    res.setHeader("Access-Control-Allow-Headers" , "*");
    res.setHeader(
        "Access-Control-Request-Methods", 
        "OPTIONS,GET,PUT,DELETE,POST"
    );
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "OPTIONS,GET,PUT,DELETE,POST"
    );

    //3.1.2 dar respuesta inmediata cuando el método sea options
    if(metodo === 'options') {
        res.writeHead(204);
        res.end();
        return;
    }

    //3.2 Obtener variables del query url
    const {query = {}} = urlParseada;

    //3.3 Obtener headers
    const {headers = {}} = req;

    //3.4 Obtener payload, en el caso de haber uno
    const decoder = new StringDecoder("utf-8");
    let buffer = "";

    //3.4.1 Ir acumulando la data cuando el request reciba un payload
    req.on("data" , (data)=>{
        buffer += decoder.write(data)

    });

    //3.4.2 Terminar de acumular datos y decirle al decorde que finalice
    req.on("end" , ()=>{
        buffer += decoder.end();

        if(headers["content-type"] === "application/json")
        {
            buffer = JSON.parse(buffer);
        }

        //3.4.3 Revisar si tiene subrutas en este caso es el indice del array
        if(rutaLimpia.indexOf("/") > -1) {
            var [rutaPrincipal,indice] = rutaLimpia.split("/");
        }
        //3.5 Ordenar la data del request
        const data = {
            indice,
            ruta: rutaPrincipal || rutaLimpia,
            query,
            metodo,
            headers,
            payload: buffer,
        };



        //3.6 Elegir el manejador dependiendo de la ruta y asignarle función que el enrutador tiene
        let handler;
        if(data.ruta && enrutador[data.ruta] && enrutador[data.ruta][metodo]) {
            handler = enrutador[data.ruta][metodo];
        }
        else {
            handler = enrutador.noEncontrado;
        }

        //4. Ejecutar handler (manejador) para enviar la respuesta
        if (typeof handler === "function"){
            handler(data, (statusCode = 200, mensaje) => {
                const respuesta = JSON.stringify(mensaje);
                res.setHeader("Content-Type" , "application/json");
                res.writeHead(statusCode);
                // Linea donde realmente ya estamos respondiendo a la aplicación cliente
                res.end(respuesta);
            });
        }
        // respuestas según la ruta
    });
};