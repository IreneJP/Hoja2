"use strict";
//5. En un nuevo fichero crear 4 objetos de la clase mobile y un array que los contenga.
exports.__esModule = true;
var _1_mobile_1 = require("./1_mobile");
var _1_1 = require("./1");
var movil1 = new _1_mobile_1.Mobile("iPhone", "8", "Apple", 64, "Grey", false, 2, 419);
var movil2 = new _1_mobile_1.Mobile("Xiaomi", "Redmi Note 95", "Xiaomi", 128, "Blue", false, 4, 224);
var movil3 = new _1_mobile_1.Mobile("Huawei ", "P40", "Huawei ", 128, "Negro", true, 4, 799);
var movil4 = new _1_mobile_1.Mobile("LG", "V50 ThinQ 5G ", "LG", 128, "white", true, 4, 999);
var moviles = [movil1, movil2, movil3, movil4];
//6. Crear un objeto de la clase MobileLibrary y asignarle el array que habéis creado previamente
var miBibio = new _1_1.MobileLibrary("Vodafone", "Centro Comercial", moviles);
//7.Comprobar que todos los métodos del objeto funcionan perfectamente.
/*
console.log(miBibio.getName())
console.log(miBibio.getLocation())
console.log(miBibio.getMobiles())
console.log(miBibio.getTotalPriceCalculation())
*/
miBibio.printLibrary();
