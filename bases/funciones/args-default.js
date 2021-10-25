"use strict";
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper)
            return (firstName + ", " + lastName).toUpperCase();
        else
            return firstName + ", " + lastName;
    };
    var name = fullName('Elias', 'Garcia', true);
})();
