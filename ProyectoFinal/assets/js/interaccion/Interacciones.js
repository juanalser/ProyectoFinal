let url="http://localhost:3001/interaction"

// obtener datos del localstorage
const cliente = JSON.parse(localStorage.getItem("cliente"))
const idcliente=cliente.id;

let texto=document.getElementById("current").innerHTML + cliente.name;
document.getElementById("current").innerHTML = texto;

window.addEventListener("load", event=> {
    callAPI(`${url}`, "GET", {})
    .then( lista => {
        const tabla = document.querySelector("#table")
        const tbody = document.querySelector("#body")

         lista.forEach(lista => {

            if (lista.customer.id==idcliente){
                const tr = document.createElement("tr")
            
                const tdid = document.createElement("td");
                const link = document.createElement("a")
                link.href = `editarinteraccion?id=${lista.id}`
                link.textContent = `${lista.id}`    
                tdid.appendChild(link)   
    
                const tdnota = document.createElement("td");
                tdnota.innerHTML=lista.note;
    
                const tdfecha = document.createElement("td");
                tdfecha.innerHTML=lista.createdAt;
    
                const tdusuario = document.createElement("td");
                tdusuario.innerHTML=lista.user.name;
                
                tr.appendChild(tdid)
                tr.appendChild(tdnota)
                tr.appendChild(tdfecha)
                tr.appendChild(tdusuario)
                tbody.appendChild(tr)
            }
        });
    })
})
