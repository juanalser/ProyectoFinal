// Obtengo el Formulario
const clienteform=document.querySelector("#crearcliente-form")

// Registrar los datos del Formulario
function crearcliente(event){
    // para evitar que se refresque el formulario al cargarlo
    event.preventDefault()

    // para obtener el formulario y todos sue elementos
    const inputs=event.target.elements;
    const cliente={
            name: inputs["nombre"].value,
            email: inputs["correo"].value,
            address: inputs["direccion"].value,
            createdAt: inputs["fecha"].value
        }
           
   // Valida si el cliente existe y si no existe lo crea
    let url="http://localhost:3001/customer"

     callAPI(`${url}/?name=${cliente.name}`, "GET", {})
    .then( result => {
        if (result.length==0){
            createAPI(url,cliente)
            alert("Cliente Registrado Satisfactoriamente!") 
            setTimeout(function () { window.location.reload(); }, 10)
        }
        else{alert("Cliente ya Existe!");}
    })     

}

// Agregar evento al Formulario
clienteform.addEventListener("submit",crearcliente)

