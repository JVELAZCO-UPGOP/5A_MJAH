const listaVeterinarios = document.getElementById('lista-veterinarios');
const nombre = document.getElementById('nombre');
const documento = document.getElementById('documento');
const apellido = document.getElementById('apellido');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('btn-guardar');
const indice = document.getElementById('indice');
const titulo = document.getElementById('exampleModalCenterTitle');
const modal = document.getElementById('exampleModalCenter');

const url = "https://veterinaria-backend-red.vercel.app/veterinarias";
let veterinarios = [];

async function listarVeterinarios() {
    try {
        const respuesta = await fetch(url);
        const veterinariosDelServer = await respuesta.json();
        if (Array.isArray(veterinariosDelServer)) {
            veterinarios = veterinariosDelServer;
        }
        if (veterinarios.length > 0) {
            const htmlVeterinarios = veterinarios
                .map(
                    (veterinario, index) => `<tr>
        <th scope="row">${index}</th>
        <td>${veterinario.documento}</td>
        <td>${veterinario.nombre}</td>
        <td>${veterinario.apellido}</td>
        <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
            </div>
        </td>
    </tr>`
                )
                .join("");
            listaVeterinarios.innerHTML = htmlVeterinarios;
            Array.from(document.getElementsByClassName("editar")).forEach(
                (botonEditar, index) => (botonEditar.onclick = editar(index))
            );
            Array.from(document.getElementsByClassName("eliminar")).forEach(
                (botonEliminar, index) => (botonEliminar.onclick = eliminar(index))
            );
            return;
        }
        listaVeterinarios.innerHTML = `<tr>
    <td colspan="5" class="lista-vacia">No hay veterinarios</td>
  </tr>`;
    } catch (error) {
        console.log({ error });
        $(".alert").show();
    }
}

async function enviarDatos(evento) {
    evento.preventDefault();
    try {
        const datos = {
            nombre: nombre.value,
            apellido: apellido.value,
            documento: documento.value,
        };
        const accion = btnGuardar.innerHTML;
        let urlEnvio = url;
        let method = "POST";
        if (accion === "Editar") {
            urlEnvio += `/${indice.value}`;
            method = "PUT";
        }
        const respuesta = await fetch(urlEnvio, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
            mode: "cors",
        });
        if (respuesta.ok) {
            listarVeterinarios();
            resetModal();
        }
    } catch (error) {
        console.log({ error });
        $(".alert").show();
    }
}

function editar(index) {
    return function cuandoCliqueo() {
        btnGuardar.innerHTML = 'Editar'
        titulo.innerHTML = "Editar Veterinario";
        $('#exampleModalCenter').modal('toggle');
        const veterinario = veterinarios[index];
        indice.value = index;
        nombre.value = veterinario.nombre;
        apellido.value = veterinario.apellido;
        documento.value = veterinario.documento;

        $("#btn-cerrar").on("click", function() {
            indice.value = '';
            nombre.value = '';
            apellido.value = '';
            documento.value = 'Documento';
            btnGuardar.innerHTML = 'Crear'
            titulo.innerHTML = "Nueva Veterinario";
        });

        $("#btn-close1").on("click", function() {
            indice.value = '';
            nombre.value = '';
            apellido.value = '';
            documento.value = 'Documento';
            btnGuardar.innerHTML = 'Crear'
            titulo.innerHTML = "Nueva Veterinario";
        });

    }

}

function resetModal() {
    indice.value = "";
    nombre.value = "";
    apellido.value = "";
    documento.value = "";
    btnGuardar.innerHTML = "Crear";
}

function eliminar(index) {
    const urlEnvio = `${url}/${index}`;
    return async function clickEnEliminar() {
        try {
            const respuesta = await fetch(urlEnvio, {
                method: "DELETE",
                mode: "cors",
            });
            if (respuesta.ok) {
                listarVeterinarios();
            }
        } catch (error) {
            console.log({ error });
            $(".alert").show();
        }
    };
}

listarVeterinarios();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;