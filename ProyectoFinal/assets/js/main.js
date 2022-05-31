function getParam(param) {
    const params = new URLSearchParams(window.location.search)
    return params.get(param)
}

function callAPI(url,method, data) {
    let configuracion = {};
    const header = {
        'Content-Type': 'application/json'
    }
    
    if (method === "GET") {
        configuracion = {
            method: method,
            headers: header
        }
    
    } else {
        configuracion = {
            method: method,
            body: JSON.stringify(data),
            headers: header
        }
    }

    return fetch(url, configuracion)
    .then(response => {
        return response.json()
    })
}

function appid(){
     // obtener datos del localstorage
    const usuario = JSON.parse(localStorage.getItem("usuario"))

    let texto = document.getElementById("nombreusuario").innerHTML + usuario.name;
    document.getElementById("nombreusuario").innerHTML = texto;
}


function createAPI(url,data) {
    fetch(url,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
        return response.json()
    })
}

function logout(){
     // borrar localStorage
    localStorage.clear("");
}
    
function clienteid(){
    const id = getParam("id");
    let url="http://localhost:3001/customer"

    callAPI(`${url}/?id=${id}`, "GET", {})
    .then( customer => { 
             // guardar datos en el local Storage del navegador
       localStorage.setItem("cliente", JSON.stringify(customer[0]))
    })
}

 function fechaactual(){
    let fecha = new Date(); //Fecha actual
    let mes = fecha.getMonth()+1; //obteniendo mes
    let dia = fecha.getDate(); //obteniendo dia
    let ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10
    return ano+"-"+mes+"-"+dia;
  }