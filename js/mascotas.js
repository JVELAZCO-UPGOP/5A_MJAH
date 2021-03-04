const listaMascotas = document.getElementById('lista-mascotas');
const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('btn-guardar');
const btnGuardar2 = document.getElementById('btn-guardar2');
const btnCerrar = document.getElementById('btn-cerrar');
const indice = document.getElementById('indice');
const titulo = document.getElementById('exampleModalCenterTitle');
const modal = document.getElementById('exampleModalCenter');

let mascotas = [
    {
      tipo: "Gato",
      nombre: "Michi",
      dueno: "Jhon"
    }
  ];

  function listarMascotas() {
    const htmlMascotas = mascotas.map((mascota, index)=>`<tr>
        <th scope="row">${index}</th>
        <td>${mascota.tipo}</td>
        <td>${mascota.nombre}</td>
        <td>${mascota.dueno}</td>
        <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
            </div>
        </td>
      </tr>`).join("");
      listaMascotas.innerHTML = htmlMascotas;
      Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=>botonEditar.onclick = editar(index));
      Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index)=>botonEliminar.onclick = eliminar(index));
  }

  function enviarDatos(evento) {
      evento.preventDefault();
      const datos = {
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value
      };
      const accion = btnGuardar.innerHTML;
      switch(accion) {
        case 'Editar':
          mascotas[indice.value] = datos;
          break;
        default:
          mascotas.push(datos);
          break;
      }
     listarMascotas();
     resetModal();
  }

  function editar(index) {
    return function cuandoCliqueoEditar() {
      btnGuardar.innerHTML = 'Editar';
      titulo.innerHTML = "Editar Mascota";
      $('#exampleModalCenter').modal('toggle');
      const mascota = mascotas[index];
      nombre.value = mascota.nombre;
      dueno.value = mascota.dueno;
      tipo.value = mascota.tipo;
      indice.value = index;

      $("#btn-cerrar").on("click",function() {
        nombre.value = '';
        dueno.value = 'Dueño';
        tipo.value = 'Tipo animal';
        indice.value = '';
        titulo.innerHTML = "Nueva Mascota";
        btnGuardar.innerHTML = 'Guardar';
     });

    $("#btn-tachita").on("click",function() {
        nombre.value = '';
        dueno.value = 'Dueño';
        tipo.value = 'Tipo animal';
        indice.value = '';
        titulo.innerHTML = "Nueva Mascota";
        btnGuardar.innerHTML = 'Guardar';
        });
    }
  }
 
  function resetModal() {
      nombre.value = '';
      dueno.value = 'Dueño';
      tipo.value = 'Tipo animal';
      indice.value = '';
      btnGuardar.innerHTML = 'Guardar';
  }

  function eliminar(index){
   
     return function clickEnEliminar() {
      $('#exampleModalCenter2').modal('toggle');
      const mascota = mascotas[index];
      nombre.value = mascota.nombre;
      dueno.value = mascota.dueno;
      tipo.value = mascota.tipo;
      indice.value = index;

      $("#btn-eliminar2").on("click",function() {
        mascotas = mascotas.filter((mascota, indiceMascota)=>indiceMascota !== index);
        listarMascotas();
        nombre.value = '';
        dueno.value = 'Dueño';
        tipo.value = 'Tipo animal';
        indice.value = '';
        titulo.innerHTML = "Nueva Mascota";
        });

        $("#btn-cerrar2").on("click",function() {
          nombre.value = '';
          dueno.value = 'Dueño';
          tipo.value = 'Tipo animal';
          indice.value = index;
          titulo.innerHTML = "Nueva Mascota";
          btnGuardar.innerHTML = 'Guardar';
          });

          $("#btn-tachita2").on("click",function() {
            nombre.value = '';
            dueno.value = 'Dueño';
            tipo.value = 'Tipo animal';
            indice.value = '';
            titulo.innerHTML = "Nueva Mascota";
            btnGuardar.innerHTML = 'Guardar';
            });
          
      }
  }
    
  
  listarMascotas();
  

 
  form.onsubmit = enviarDatos;
  btnGuardar.onclick = enviarDatos;