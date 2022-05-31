const prompt = require('prompt');
prompt.start();
prompt.get(['primero','segundo'], function (err, result) {
    let a=parseInt(result.primero);
    let b=parseInt(result.segundo);
    if(a>b){
        console.log('El mayor es ' + a);
    }else{
        console.log('El mayor es ' + b);
    }
});