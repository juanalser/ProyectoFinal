const prompt = require('prompt');
prompt.start();
prompt.get(['primero','segundo','tercero'], function (err, result) {
    let a=parseInt(result.primero);
    let b=parseInt(result.segundo);
    let c=parseInt(result.tercero);
    if(a>=b && a>=c){
        console.log('El mayor es ' + a);
    }else if (b>=a && b>=c) {
        console.log('El mayor es ' + b);
    } else {
        console.log('El mayor es ' + c);
    }
});