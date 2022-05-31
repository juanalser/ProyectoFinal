const id = getParam("id");

let url="http://localhost:3001/interaction"
// Obtener los datos de la iteraccion y mostrarlos
window.addEventListener("load", event=> {
    callAPI(`${url}/${id}`, "GET", {})
    .then( interaction => {
        const interaccionForm = document.querySelector("#editariteraccion-form")
        interaccionForm.elements["cliente"].value = interaction.customer.name
        interaccionForm.elements["nota"].value = interaction.note
        interaccionForm.elements["usuario"].value = interaction.user.name
        interaccionForm.elements["fecha"].value = interaction.createdAt
    })
})

// Actualizar Datos del Formulario
const interaccionForm=document.querySelector("#editariteraccion-form")

function editarinteraccion(event){
    event.preventDefault()
 
    // obtener los datos del local storage
    const usuario = JSON.parse(localStorage.getItem("usuario"))
    const cliente = JSON.parse(localStorage.getItem("cliente"))

    // Obtener datos del formulario
    const inputs = event.target.elements;
    const interaccion = {
        note: inputs["nota"].value,
        user: usuario,
        customer: cliente,
        createdAt: inputs["fecha"].value
    }
    console.log(interaccion)

    const borrar= document.querySelector('#eliminar');

    if (borrar.checked == true){
        if(confirm(`Desea borrar la iteraccion ${id}?`)) {
            callAPI(`${url}/${id}`, "DELETE", {})
            .then( ()=> {
                alert("Interaccion Eliminada Satisfactoriamente!") 
            })
        }
    } else {
        callAPI(`${url}/${id}`, "PUT", interaccion)
        .then( () => {
            alert("Interaccion Actualizada Satisfactoriamente!") 
            })      
    }
    
    window.location.href="interacciones"

}

// Agregar evento al Formulario
interaccionForm.addEventListener("submit",editarinteraccion)
