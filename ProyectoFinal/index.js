const express=require('express')    
const app=express()

app.use(express.static('assets'));
app.use(express.static('node_modules'));

/******Rutas de Acceso a la Aplicacion */

app.get('/',function(req,res){
    res.sendFile(__dirname +'/login.html')
 });

 app.get('/app',function(req,res){
   res.sendFile(__dirname +'/assets/app.html')
 });


 /***********Rutas para Trabajar con el Modulo de Clientes  */

 app.get('/clientes',function(req,res){
     res.sendFile(__dirname +'/assets/views/cliente/clientes.html')
 });

 app.get('/crearcliente',function(req,res){
   res.sendFile(__dirname +'/assets/views/cliente/crearcliente.html')
});

app.get('/editarcliente',function(req,res){
   res.sendFile(__dirname +'/assets/views/cliente/editarcliente.html')
});


 /***********Rutas para Trabajar con el Modulo de Interacciones  */

 app.get('/interacciones',function(req,res){
   res.sendFile(__dirname +'/assets/views/interaccion/interacciones.html')
});

app.get('/crearinteraccion',function(req,res){
   res.sendFile(__dirname +'/assets/views/interaccion/crearinteraccion.html')
});

app.get('/editarinteraccion',function(req,res){
   res.sendFile(__dirname +'/assets/views/interaccion/editarinteraccion.html')
});


/***********Rutas para Trabajar con el Modulo de Seguridad  */

app.get('/usuarios',function(req,res){
   res.sendFile(__dirname +'/assets/views/seguridad/usuarios.html')
});

app.get('/crearusuario',function(req,res){
   res.sendFile(__dirname +'/assets/crearusuario.html')
});

app.get('/editarusuario',function(req,res){
   res.sendFile(__dirname +'/assets/views/seguridad/editarusuario.html')
});

/**********Puerto donde se ejecuta la Aplicacion */

app.listen(3000);
console.log("express is running on port 3000");
console.log("http://localhost:3000");