"use strict";
//Crear una clase llamada Mobile con las siguientes características:
//• Propiedades Publicas :§ name, § model, § trademark, § sdSize, § color, § is5G, § cameraNumber, § price
//• Constructor a través del cual pueda inicializar todos los atributos
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    //Modificar la clase anterior para que todos los atributos sean privados y crear los métodos setters y getters para cada atributo.
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.setSdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.setIs5G = function (is5G) {
        this.is5G = is5G;
    };
    Mobile.prototype.getCamera = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setCamera = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    /*Crear un nuevo método que imprima todas las características del objeto
    siguiendo el siguiente patrón:
    • “The characteristics of the mobile name are:”
    § Name : name
    § Model: model
    § Trademark : trademark
    § SD Size (GB) : sdSize
    § Color: color
    § Is 5g?: is5G
    § Number of Cameras: cameraNumber
    6. En otro fichero hacer las mismas operaciones que se hicieron en el punto 2.
    */
    Mobile.prototype.print = function () {
        console.log("Name: " + this.name + "\n" + "Model: " + this.model + "\n" + "Trademark: " + this.trademark + "SD Size (GB): " + this.sdSize + "\n" + "Color: " + this.color + "\n" + "Is 5g?: " + this.is5G + "\n" + "Number of Cameras: " + this.cameraNumber);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
