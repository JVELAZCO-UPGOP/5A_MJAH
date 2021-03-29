const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;


let recursos = {
  mascotas: [
    {tpo: "Perro", nombre: "Firulais", dueño:"Jhon"},
    {tpo: "Perro", nombre: "Firulais", dueño:"Jhon"},
    {tpo: "Perro", nombre: "Firulais", dueño:"Jhon"},
    {tpo: "Perro", nombre: "Firulais", dueño:"Jhon"},
    {tpo: "Perro", nombre: "Firulais", dueño:"Jhon"},
  ],
}

  const callbackDelServidor = (req, res) => {
   //obtener url desde el objeto request 
    const urlActual = req.url;
    const urlParseada = url.parse(urlActual, true);

  //obtener la ruta
  const ruta = urlParseada.pathname;

  //Enviar una respuesta dependiendo de la ruta que se le asigne
  

  //Quitar el slash
  const rutaLimpia = ruta.replace(/^\/+|\/+$/g, '');

  //Obtener el método http
  const metodo =  req.method.toLowerCase();

  //Obtener variables del query url
  const { query = {} } = urlParseada;

  //Obtener los headers
  const { headers = {} } = req;

  //Obtener el payload
  const decoder = new StringDecoder('utf-8');
  let buffer = '';

  //Ir acumulando la data cuando el request reciba un payload
  req.on('data', (data)=>{
    buffer += decoder.write(data);
  });

  //Se termina de acumular los datos y decirle al decoder que finalice
  req.on('end', ()=>{
    buffer += decoder.end();

    if (headers["content-type"] === 'application/json') {
      buffer=JSON.parse(buffer);
    }

    //Ordenar la data 
    const data = {
      ruta: rutaLimpia,
      query,
      metodo,
      headers,
      payload: buffer
    };
    console.log({data});
    //Elegir el manejador dependiendo de la ruta  //(handler) y asignarle función que el enrutador tiene 
    let handler;
    if(rutaLimpia && enrutador[rutaLimpia] && enrutador[rutaLimpia][metodo]) {
      handler = enrutador[rutaLimpia][metodo];
    } else {
      handler = enrutador.noEncontrado;
    }

    //Ejecutar handler (manejador) para enviar respuesta
    if(typeof handler === 'function') {
      handler(data, (statusCode = 200, mensaje)=>{
        const respuesta = JSON.stringify(mensaje);
        res.setHeader("Content-Type", "application/json")
        res.writeHead(statusCode);
        // linea donde se responde a la aplicación cliente
        res.end(respuesta);
      })
    }

  });
};

const enrutador = {
  ruta: (data, callback) => {
    callback(200, {mensaje: 'Esta es /ruta'});
  },
  mascotas: {
    get: (data, callback) => {
      callback(200, recursos.mascotas);
    },
    post: (data, callback) => {
      recursos.mascotas.push(data.payload);
      callback(201, data.payload);
    },
  },
  noEncontrado: (data, callback) => {
    callback(404, {mensaje: 'No encontrado'});
  }
}

const server = http.createServer(callbackDelServidor);

server.listen(5000, ()=>{
  console.log('El servidor esta escuchando peticiones en http://localhost:5000/');
});