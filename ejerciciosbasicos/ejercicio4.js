const prompt = require('prompt');
prompt.start();
prompt.get(['primero','segundo'], function (err, result) {
    let suma=parseInt(result.primero)+parseInt(result.segundo);
    console.log('La suma es ' + suma);
});
