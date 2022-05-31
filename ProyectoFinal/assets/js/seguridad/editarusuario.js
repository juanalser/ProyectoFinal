  // Obtener la url de la pantall
  let url="http://localhost:3001/user";
  const id = getParam("id");
 
  // Obtener los datos del cliente y mostrarlos en el cliente
  window.addEventListener("load", event=> {
     callAPI(`${url}/${id}`, "GET", {})
     .then( user => {
         const usuarioForm = document.querySelector("#editarusuario-form")
         usuarioForm.elements["nombre"].value = user.name
         usuarioForm.elements["username"].value = user.username
         usuarioForm.elements["password"].value = user.password
      })
 })
 
 // Actualizar Datos del Formulario
 const usuarioForm=document.querySelector("#editarusuario-form")
 
 function editarusuario(event){
     event.preventDefault()
  
     // Obtener datos del formulario
     const inputs = event.target.elements;
     const user = {
         name: inputs["nombre"].value,
         username: inputs["username"].value,
         password: inputs["password"].value,
    }
 
     const borrar= document.querySelector('#eliminar');
  
     if (borrar.checked == true){
         if(confirm(`Desea borrar el usuario ${user.name}?`)) {
             callAPI(`${url}/${id}`, "DELETE", {})
             .then( ()=> {
                 alert("Usuario Eliminado Satisfactoriamente!") 
             })
         }
     } else {
         callAPI(`${url}/${id}`, "PUT", user)
         .then( () => {
             alert("Usuario Actualizado Satisfactoriamente!") 
          })      
     }
     
     window.location.href="usuarios"
 
 }
 
 // Agregar evento al Formulario
 usuarioForm.addEventListener("submit",editarusuario)
 