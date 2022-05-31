const prompt = require('prompt');

prompt.start();
prompt.get(['numero'], function (err, result) {
    let a=parseInt(result.numero);
    let r=1;
    for (let i=2; i<a; i++){
        if ((a%i)==0){
            r=0;
        }
    }
    if(r==0){
        console.log('No es un numero primo');
    }else{
        console.log('Es un numero Primo');
    }
});