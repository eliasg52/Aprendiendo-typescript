"use strict";
(function () {
    var fullName = function (firstName) {
        var restoDeArgumentos = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restoDeArgumentos[_i - 1] = arguments[_i];
        }
        return firstName + " " + restoDeArgumentos.join(' ');
    };
})();
