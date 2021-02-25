const listaDuenos=document.getElementById('lista-duenos');
const pais=document.getElementById('pais');
const identificacion=document.getElementById('identificacion');
const nombre=document.getElementById('nombre');
const apellido= document.getElementById('apellido');
const form= document.getElementById('form');
const indice= document.getElementById('indice');
const btnGuardar=document.getElementById('btn-guardar');


let duenos=[
    {
        
        nombre: "Jhon",
        apellido: "Garcia",
        pais: "Canadá",
        identificacion: "18070280"
    },
    {
        nombre: "Alicia",
        apellido: "Mendez",
        pais: "Colombia",
        identificacion: "74123698"
    }
];

function listarDuenos() {
    const htmlDuenos =duenos.map((dueno, index)=>`<tr>
    <th scope="row">${index}</th>
    <td>${dueno.identificacion}</td>
    <td>${dueno.pais}</td>
    <td>${dueno.nombre}</td>
    <td>${dueno.apellido}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
        <button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash-alt"></i></button>
        
    </div>
    </td>
</tr>`).join("");
listaDuenos.innerHTML = htmlDuenos;
Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=> botonEditar.onclick= editar(index));
Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index)=> botonEliminar.onclick= eliminar(index));
}

function enviarDatos(evento) {
    evento.preventDefault();
    const datos = {
        nombre: nombre.value,
        apellido: apellido.value,
        pais: pais.value,
        identificacion: identificacion.value                                                                                                      
    };
    const accion = btnGuardar.innerHTML;
    switch(accion){
        case 'Editar':
            //Editar
            duenos[indice.value] = datos;
            break;
            default:
                //crear
                duenos.push(datos);
                break;
    }
listarDuenos();
resetModal();
}
function editar(index){
    return function cuandoHagaClick (){
    btnGuardar.innerHTML = 'Editar'
    $('#exampleModalCenter').modal('toggle');
    const dueno = duenos[index];
    nombre.value = dueno.nombre;
    apellido.value = dueno.apellido;
    pais.value = dueno.pais;
    identificacion.value = dueno.tipo;
    indice.value = index;
    
}
}

function resetModal(){
    nombre.value = '';
    apellido.value = '';
    pais.value = '';
    identificacion.value = '';
    indice.value ='';
    btnGuardar.innerHTML ='Crear'
}
function eliminar(index){
    return function clickenEliminar(){
        
        duenos = duenos.filter((dueno, indicedueno)=>indicedueno !==index);
        listarDuenos();
    }


}

listarDuenos();

form.onsubmit = enviarDatos;
btnGuardar.onclick= enviarDatos;