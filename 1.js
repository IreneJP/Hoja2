"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    //Crear un constructor que tome como parámetros de entrada el name, location y el array de objetos de la clase Mobile.
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
    }
    //Crear los métodos settes y getters para todos los atributos
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.setName = function (name) {
        this.name = name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.setLocation = function (location) {
        this.location = location;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.setMobiles = function (moviles) {
        this.mobiles = this.mobiles;
    };
    //4 Crear una función denominada totalPriceCalculation que te calcule el precio total de la librería (suma de los precios de todos los objetos almacenados en el atributo mobiles).
    MobileLibrary.prototype.totalPriceCalculation = function () {
        return this.totalPrice;
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
