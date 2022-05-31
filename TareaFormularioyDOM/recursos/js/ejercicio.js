/*accion para obtener el formulario */
const miformulario=document.querySelector("#miformulario")

function eventoSubmit(evento){
    /* Quitar comportamiento por defecto del evento*/
    evento.preventDefault()
    //console.log("se esta ejecutando el javascript")

    /*Obtener los inputs del formulario */
    const inputs=evento.target.elements;

    /*Obtener los valores ingresados en los inputs */
    const ancho=inputs["ancho"].value;
    const alto=inputs["alto"].value;
    const contenido=inputs["contenido"].value;

    //console.log(ancho+ "\n" + alto + "\n" + contenido);

    /*cambiar texto de la caja */
    const elementocaja=document.querySelector("#caja")
    elementocaja.textContent=contenido;

    /*cambiar el ancho de la caja */
    elementocaja.style.width=ancho + 'px'

    /*cambiar la altura de la caja */
    elementocaja.style.height=alto + 'px'
}

/*para ejecutar la funcion al presionar el boton */
miformulario.addEventListener("submit",eventoSubmit)