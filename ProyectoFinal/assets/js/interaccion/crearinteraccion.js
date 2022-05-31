const interaccionform=document.querySelector("#creariteraccion-form")

    // obtener datos del localstorage
    const cliente = JSON.parse(localStorage.getItem("cliente"));
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const fechacreacion=fechaactual();
    
    interaccionform.elements["cliente"].value = cliente.name;
    interaccionform.elements["usuario"].value =usuario.name;
    interaccionform.elements["fecha"].value =fechacreacion;

    function crearInteraccion(event){

        const inputs=event.target.elements;
        
        const interaction={
            note: inputs["nota"].value,
            createdAt: inputs["fecha"].value,
            user: usuario,
            customer: cliente
        }
        let url="http://localhost:3001/interaction"
        createAPI(url,interaction)
        alert("Interaccion Registrada Satisfactoriamente!") 
        setTimeout(function () { window.location.reload(); }, 10)
   
}

interaccionform.addEventListener("submit",crearInteraccion)