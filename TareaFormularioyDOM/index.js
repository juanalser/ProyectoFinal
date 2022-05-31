/*Pasos para ejecutar la aplicacion utilizando Express */
// *********** 1. Agregar dependencia express ***********
const express = require('express')
// *********** 2. Arrancar express ***********
const app=express()
/* ***********3.Exponer carpeta donde se encuetran los archivos css y js
                en mi caso le llame recursos en lugar de assets*********** */
app.use(express.static('recursos'));
// *********** 4.agregar las ruta a utilizar en la aplicacion ***********

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html")
});

app.get('/ejercicio',function(req,res){
    res.sendFile(__dirname+"/ejercicio.html")
})

// *********** 5. agregar el puerto que usara express
app.listen(3000)
console.log("Express esta corriendo en el puerto: 3000")
console.log("http://localhost:3000")