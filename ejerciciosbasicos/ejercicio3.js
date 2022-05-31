const prompt = require('prompt');
prompt.start();
prompt.get(['nombreUsuario'], function (err, result) {
    console.log('Hola ' + result.nombreUsuario);
});
