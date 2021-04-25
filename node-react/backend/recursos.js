module.exports = {
    mascotas: [
        { tipo: "Perro", nombre: "Bobby0", dueno: "Mario" },
        { tipo: "Perro", nombre: "Bobby1", dueno: "Mario" },
        { tipo: "Perro", nombre: "Bobby2", dueno: "Mario" },
        { tipo: "Perro", nombre: "Bobby3", dueno: "Mario" },
    ],
    veterinarias: [
        { nombre: "Alejandra", apellidos: "Perez", identificacion: "1234567890" },
        { nombre: "Alexander", apellidos: "Gómez", identificacion: "4234569999" },
        { nombre: "Julian", apellidos: "Madrid", identificacion: "555666777" },
        { nombre: "Naryie", apellidos: "Vasquez", identificacion: "100666777" },
    ],
    duenos: [
        { nombre: "Alejandra", apellidos: "Ramirez", identificacion: "1233367890" },
        { nombre: "Alexandra", apellidos: "Fernandez", identificacion: "4234135569" },
        { nombre: "Julio", apellidos: "Tamayo", identificacion: "456666777" },
        { nombre: "Natalia", apellidos: "Gonzales", identificacion: "9000666777" },
    ],
    consultas: [
        {
            mascota: 0,
            veterinaria: 0,
            fechaCreacion: new Date(),
            fechaEdicion: new Date(),
            historia: "historia 1",
            diagnostico: "diagnostico 1",
        },
        {
            mascota: 1,
            veterinaria: 2,
            fechaCreacion: new Date(),
            fechaEdicion: new Date(),
            historia: "historia 2",
            diagnostico: "diagnostico 2",
        },
    ],
};