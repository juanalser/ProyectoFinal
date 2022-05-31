const prompt = require('prompt');

prompt.start();
prompt.get(['numero'], function (err, result) {
    let a=(parseInt(result.numero)%2);
    if(a==0){
        console.log('Es divisible por 2');
    }else{
        console.log('No es divisible por 2');
    }
});