// Obtengo el Formulario
const userform=document.querySelector("#user-form")

// Registrar los datos del Formulario
function crearusuario(event){
    // para evitar que se refresque el formulario al cargarlo
    event.preventDefault()

    // para obtener el formulario y todos sue elementos
    const inputs=event.target.elements;
    const user={
            name: inputs["nombre"].value,
            username: inputs["username"].value,
            password: inputs["password"].value
    }

// Valida si el usuario existe y si no existe lo crea
    let url="http://localhost:3001/user"

    callAPI(`${url}/?username=${user.username}`, "GET", {})
    .then( usuario => {
        console.log(usuario)
        if (usuario.length==0){
            createAPI(url,user)
            alert("Usuario Registrado Satisfactoriamente!");
            setTimeout(function () { window.location.reload(); }, 10)
                
        }
        else{alert("Usuario ya Existe!");}
    })     
}

// Agregar evento al Formulario
userform.addEventListener("submit",crearusuario)