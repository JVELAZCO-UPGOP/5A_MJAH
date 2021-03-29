
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

const callbackDelServidor = (req, res) => {

    //1.obtener url desde el objeto request
    const urlActual= req.url;
    const urlParseada =url.parse(urlActual, true);

    //2.obtener la ruta
    const ruta =urlParseada.pathname;
    
    //3.quitar slash
    const rutaLimpia = ruta.replace(/^\/+|\/+$/g, '');

    //3.1Obtener el método http
    const metodo = req.method.toLowerCase();
    
    //3.2 Obtener variables de query url
    const  {query = {} } = urlParseada;

    //3.3 Obtener headers
    const  {headers = {}} = req;
    
    //3.4Obtener payload, en caso de haber uno
    const decoder = new StringDecoder('utf-8');
    let buffer = '';
    
    //3.4.1 Ir acomodando la data cuando el request reciba un payload
    req.on('data', (data) => {
        buffer += decoder.write(data);
    });

    //3.4.2 Terminar de acomodar datos y decirle al decoder que finalice
    req.on('end', () => {
        buffer += decoder.end();

    //3.5 Ordenar la data del request
    const data={
        ruta: rutaLimpia,
        query,
        metodo,
        headers,
        payload: buffer
    };

    //3.6 Elegir el manejador dependiendo de la ruta y asignarle la funcion que el enrutador tiene
    let handler;
    if (rutaLimpia && enrutador[rutaLimpia]) {
        handler = enrutador[rutaLimpia];
    }else{
        handler=enrutador.noEncontrado;
    }

    //4.Ejecutar handler (manejador) para ver la respuesta
    if (typeof handler === 'function') {
        handler(data, (statusCode = 200, mensaje)=>{
            const respuesta = JSON.stringify(mensaje);
            res.writeHead(statusCode);
            //linea donde realmente estamos respondiendo a la aplicación cliente
            res.end(respuesta);
        })
    }
    });
    
};

const enrutador = {
    ruta: (data, callback) => { 
        callback(200, {mensaje: 'Esta es /ruta'});
    },
    usuarios: (data, callback) => { 
        callback(200, [{nombre: 'usuario 1'},{nombre: 'usuario 2'}]);
    },
    noEncontrado: (data, callback) =>{
        callback: (404, {mensaje:'No encontrado'});
    }
}

const server = http.createServer(callbackDelServidor);
server.listen(5000, ()=>{
    console.log('El servidor está escuchando peticiones en http://localhost:5000/');
});