"use strict";
(function () {
    var error = function (mensaje) {
        throw new Error(mensaje);
    };
    error('Auxilio');
    console.log('hola mundo');
})();
