"use strict";
(function () {
    //funciones basicas
    function sumar(a, b) {
        return a + b;
    }
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ['flash', 'arrow', 'superman', 'linterna verde'];
    contar(superHeroes);
    //parametros por defecto
    var llamarBatman = function (llamar) {
        if (llamar === void 0) { llamar = false; }
        if (llamar) {
            console.log('Batiseñal activada');
        }
    };
    llamarBatman();
    //REST?
    var unirHeroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(', ');
    };
    //tipo funcion
    var noHaceNada = function (numero, texto, booleano, arreglo) { };
    //crear el tipo de funcion que acepte la funcion 'noHaceNada'
    var noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
