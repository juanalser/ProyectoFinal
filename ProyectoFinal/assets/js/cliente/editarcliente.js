  // Obtener la url de la pantalla
 let url="http://localhost:3001/customer";
 const id = getParam("id");

 // Obtener los datos del cliente y mostrarlos en el cliente
 window.addEventListener("load", event=> {
    callAPI(`${url}/${id}`, "GET", {})
    .then( customer => {
        const clienteForm = document.querySelector("#editarcliente-form")
        clienteForm.elements["nombre"].value = customer.name
        clienteForm.elements["correo"].value = customer.email
        clienteForm.elements["direccion"].value = customer.address
        clienteForm.elements["fecha"].value = customer.createdAt
    })
})

// Actualizar Datos del Formulario
const clienteform=document.querySelector("#editarcliente-form")

function editarcliente(event){
    event.preventDefault()
 
    // Obtener datos del formulario
    const inputs = event.target.elements;
    const cliente = {
        name: inputs["nombre"].value,
        email: inputs["correo"].value,
        address: inputs["direccion"].value,
        createdAt: inputs["fecha"].value
    }

    const borrar= document.querySelector('#eliminar');

    if (borrar.checked == true){
        if(confirm(`Desea borrar el cliente ${cliente.name}?`)) {
            callAPI(`${url}/${id}`, "DELETE", {})
            .then( ()=> {
                alert("Cliente Eliminado Satisfactoriamente!") 
            })
        }
    } else {
        callAPI(`${url}/${id}`, "PUT", cliente)
        .then( () => {
            alert("Cliente Actualizado Satisfactoriamente!") 
            })      
    }
    
    window.location.href="clientes"

}

// Agregar evento al Formulario
clienteform.addEventListener("submit",editarcliente)
