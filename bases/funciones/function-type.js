"use strict";
(function () {
    var sumarNumeros = function (a, b) { return a + b; };
    var saludar = function (nombre) { return "Hola " + nombre; };
    var salvarMundo = function () { return "El mundo esta salvado"; };
    var miFuncion;
    miFuncion = sumarNumeros;
    console.log(miFuncion(3, 4));
})();
