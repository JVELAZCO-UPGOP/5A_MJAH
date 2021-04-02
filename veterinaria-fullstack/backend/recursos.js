module.exports = {
    mascotas: [
    {tipo: "Perro", nombre: "Firulais0", dueno:"Jhon"},
    {tipo: "Perro", nombre: "Firulais1", dueno:"Jhon"},
    {tipo: "Perro", nombre: "Firulais2", dueno:"Jhon"},
    {tipo: "Perro", nombre: "Firulais3", dueno:"Jhon"},
    {tipo: "Perro", nombre: "Firulais4", dueno:"Jhon"},
    ],

    veterinarias: [
        { nombre: "Héctor", apellido: "Ochoa", documento: "18269514"},
        { nombre: "Giovanni", apellido: "Escobar", documento: "12457865"},
        { nombre: "Mónica", apellido: "Ortiz", documento: "14785236"},
        { nombre: "Cecilia", apellido: "Rodriguez", documento: "17058021"},
        { nombre: "Adrián", apellido: "Alatorre", documento: "18080392"}

    ],

    duenos: [
        { nombre: "Maricruz", apellido: "Olivares", documento: "14785236"},
        { nombre: "Sonia", apellido: "Rodriguez", documento: "14523678"},
        { nombre: "Rebeca", apellido: "Sanchez", documento: "36985214"},
        { nombre: "Abraham", apellido: "Villa", documento: "12324565"},
        { nombre: "Oscar", apellido: "Palazuelos", documento: "14746325"}

    ],

    consultas:
    [
        {
            mascota: 0,
            veterinaria: 0,
            fechaCreacion: new Date(),
            fechaEdicion: new Date(),
            historia: "",
            diagnostico: "Diagnostico",
        },

    ],

};