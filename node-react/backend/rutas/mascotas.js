module.exports = function mascotasHandler(mascotas) {
  return {
    get: (data, callback) => {
      console.log("handler mascotas", { data });
      if (typeof data.indice !== "undefined") {
        if (mascotas[data.indice]) {
          return callback(200, mascotas[data.indice]);
        }
        return callback(404, {
          mensaje: `mascota con indice ${data.indice} no encontrada`,
        });
      }

      // verifico que data.query traiga datos
      // en tipo o nombre o dueno, esto significa
      //que el request es una búsqueda
      if (
        data.query &&
        (data.query.nombre || data.query.tipo || data.query.dueno)
      ) {
        const llavesQuery = Object.keys(data.query);
        let respuestaMascotas = [...mascotas];
        respuestaMascotas = respuestaMascotas.filter((_mascota) => {
          let resultado = false;
          for (const llave of llavesQuery) {
            const expresionRegular = new RegExp(data.query[llave], "ig");
            resultado = _mascota[llave].match(expresionRegular);
            if (resultado) {
              break;
            }
          }
          return resultado;
        });

        return callback(200, respuestaMascotas);
      }
      callback(200, mascotas);
    },
    post: (data, callback) => {
      mascotas.push(data.payload);
      callback(201, data.payload);
    },
    put: (data, callback) => {
      if (typeof data.indice !== "undefined") {
        if (mascotas[data.indice]) {
          mascotas[data.indice] = data.payload;
          return callback(200, mascotas[data.indice]);
        }
        return callback(404, {
          mensaje: `mascota con indice ${data.indice} no encontrada`,
        });
      }
      callback(400, { mensaje: "indice no enviado" });
    },
    delete: (data, callback) => {
      if (typeof data.indice !== "undefined") {
        if (mascotas[data.indice]) {
          mascotas = mascotas.filter(
            (_mascota, indice) => indice != data.indice
          );
          return callback(204, {
            mensaje: `elemento con indice ${data.indice} eliminado`,
          });
        }
        return callback(404, {
          mensaje: `mascota con indice ${data.indice} no encontrada`,
        });
      }
      callback(400, { mensaje: "indice no enviado" });
    },
  };
};
