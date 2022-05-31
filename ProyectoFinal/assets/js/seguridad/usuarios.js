let url="http://localhost:3001/user"

window.addEventListener("load", event=> {
    callAPI(url, "GET", {}).then( lista => {
        const tabla = document.querySelector("#table")
        const tbody = document.querySelector("#body")

        lista.forEach(lista => {
            const tr=document.createElement("tr")

            const tdid = document.createElement("td");
            const link = document.createElement("a");
            link.href = `editarusuario?id=${lista.id}`;
            link.textContent = `${lista.id}`;
            tdid.appendChild(link);

            const tdnombre=document.createElement("td");
            tdnombre.innerHTML=lista.name;

            const tdusername = document.createElement("td");
            tdusername.innerHTML=lista.username;

             tr.appendChild(tdid)
            tr.appendChild(tdnombre)
            tr.appendChild(tdusername)
            tbody.appendChild(tr)
 
        });
    })
})
