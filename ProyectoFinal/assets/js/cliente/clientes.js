let url="http://localhost:3001/customer"

window.addEventListener("load", event=> {
    callAPI(url, "GET", {}).then( lista => {
        const tabla = document.querySelector("#table")
        const tbody = document.querySelector("#body")

         lista.forEach(lista => {
            const tr = document.createElement("tr")

            const tdid = document.createElement("td");
            const link = document.createElement("a")
            link.href = `editarcliente?id=${lista.id}`
            link.textContent = `${lista.id}`
            tdid.appendChild(link)   

            const tdnombre = document.createElement("td");
            tdnombre.innerHTML=lista.name;

            const tdcorreo = document.createElement("td");
            tdcorreo.innerHTML=lista.email;

            const tddireccion = document.createElement("td");
            tddireccion.innerHTML=lista.address;

            const tdfecha = document.createElement("td");
            tdfecha.innerHTML=lista.createdAt;

            tr.appendChild(tdid)
            tr.appendChild(tdnombre)
            tr.appendChild(tdcorreo)
            tr.appendChild(tddireccion)
            tr.appendChild(tdfecha)
            tbody.appendChild(tr)
        });
    })
})
