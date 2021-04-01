module.exports = function veterinariosHandler(veterinarios) {
    return {
        get: (data, callback) => {
            if (typeof data.indice !== "undefined") {
                console.log("handler veterinarios", { data });
                if (veterinarios[data.indice]) {
                    return callback(200, veterinarios[data.indice]);
                }
                return callback(404, {
                    mensaje: `veterinario con indice ${data.indice} no encontrado`,
                });
            }
            callback(200, veterinarios);
        },
        post: (data, callback) => {
            veterinarios.push(data.payload);
            callback(201, data.payload);

        },
        put: (data, callback) => {
            if (typeof data.indice !== "undefined") {
                if (veterinarios[data.indice]) {
                    veterinarios[data.indice] = data.payload;
                    return callback(200, veterinarios[data.indice]);
                }
                return callback(404, {
                    mensaje: `veterinarios con indice ${data.indice} no encontrado`,
                });
            }
            callback(404, { mensaje: "Indice No Enviado" });
        },
        delete: (data, callback) => {
            if (typeof data.indice !== "undefined") {
                if (veterinarios[data.indice]) {
                    veterinarios = veterinarios.filter(
                        (_veterinario, indice) => indice != data.indice
                    );
                    return callback(204, { mensaje: 'elemento con indice ${data.indice} elimimado' });
                }
                return callback(404, {
                    mensaje: `veterinarios con indice ${data.indice} no encontrado`,
                });
            }
            callback(404, { mensaje: "Indice No Enviado" });
        },
    };
}; 