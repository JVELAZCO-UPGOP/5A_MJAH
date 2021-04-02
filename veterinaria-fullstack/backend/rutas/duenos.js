module.exports = function duenosHandler(duenos) {
    return {
        get: (data, callback) => {
            if (typeof data.indice !== "undefined") {
                console.log("handler duenos", { data });
                if (duenos[data.indice]) {
                    return callback(200, duenos[data.indice]);
                }
                return callback(404, {
                    mensaje: `dueno con indice ${data.indice} no encontrado`,
                });
            }
            callback(200, duenos);
        },
        post: (data, callback) => {
            duenos.push(data.payload);
            callback(201, data.payload);

        },
        put: (data, callback) => {
            if (typeof data.indice !== "undefined") {
                if (duenos[data.indice]) {
                    duenos[data.indice] = data.payload;
                    return callback(200, duenos[data.indice]);
                }
                return callback(404, {
                    mensaje: `duenos con indice ${data.indice} no encontrado`,
                });
            }
            callback(404, { mensaje: "Indice No Enviado" });
        },
        delete: (data, callback) => {
            if (typeof data.indice !== "undefined") {
                if (duenos[data.indice]) {
                    duenos = duenos.filter(
                        (_dueno, indice) => indice != data.indice
                    );
                    return callback(204, { mensaje: 'elemento con indice ${data.indice} elimimado' });
                }
                return callback(404, {
                    mensaje: `duenos con indice ${data.indice} no encontrado`,
                });
            }
            callback(404, { mensaje: "Indice No Enviado" });
        },
    };
};