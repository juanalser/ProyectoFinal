//Obtener formulario
const loginform=document.querySelector("#login-form")

// crear accion del formulario
function validateuser(event){
    event.preventDefault()
    
    //Obtener datos del formulario
    const inputs=event.target.elements;   
    const user = {
        username: inputs["username"].value,
        password: inputs["password"].value 
    }

    // enviar datos al Api
    let url="http://localhost:3001/user"
    
    callAPI(`${url}/?username=${user.username}`, "GET", {})
    .then( usuario => {
        if (usuario.length==0){alert("Usuario no Existe!");}
        else{
            if (usuario[0].password!=user.password){alert("Contrasena Incorrecta, intente de nuevo!")}
            else{
                // guardar datos en el local Storage del navegador
                localStorage.setItem("usuario", JSON.stringify(usuario[0]))
                window.location.replace("app")
            }
        }
    })      
}

// agregar evento al formulario
loginform.addEventListener("submit", validateuser)
