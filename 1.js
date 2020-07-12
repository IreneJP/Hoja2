"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    //Crear un constructor que tome como parámetros de entrada el name, location y el array de objetos de la clase Mobile.
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPriceCalculation();
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
        var precio = Number();
        for (var i = 0; i < this.mobiles.length; i++) {
            precio += this.mobiles[i].getPrice();
        }
        return precio;
    };
    MobileLibrary.prototype.getTotalPriceCalculation = function () {
        {
            return this.totalPriceCalculation();
        }
    };
    /*. Crear un nuevo método denominado printLibrary que recorra todos los
objetos del atributo mobile y los muestre por consola de la siguiente
manera:
• “This is all my mobiles:”
• “The characteristics of the mobile name are:”
• Name : name
• Model: model
• Trademark : trademark
• SD Size (GB) : sdSize
• Color: color
• Is 5g?: is5G
• Number of Cameras: cameraNumber
• “The characteristics of the mobile name are:”
• Name : name
• Model: model
• Trademark : trademark
• SD Size (GB) : sdSize
• Color: color
• Is 5g?: is5G
• Number of Cameras: cameraNumber
• …….
• “Price overall: totalPrice“ */
    MobileLibrary.prototype.printLibrary = function () {
        var library = "";
        for (var i = 0; i < this.mobiles.length; i++) {
            library += this.mobiles[i].print() + "/n";
        }
        console.log("This is all my mobiles: " + "\n" + library + "\n");
    };
    return MobileLibrary;
}()); //NO ME SALE!!
exports.MobileLibrary = MobileLibrary;
/*//12. En el fichero principal crear los objetos necesarios para crear un nuevo objeto de la clase MobileLibrary y comprobar todos sus métodos

let Motorola= new Mobile("Motorola", "3", "Motorola", 6, "White", false, 1, 125)
let Sony = new Mobile("Sony", "Poco F2 Pro ", "Sony",128,"Electric Purple",true, 4,499)
let BQ = new Mobile("BQ ", "New Edition", "Huawei ", 256,"Negro", false,3,353.43 )
let LG = new Mobile("Realme", "X50 Pro", "LG",128, "red",true,4, 598)

let todosMoviles = [Motorola, Sony, BQ, LG]

let stock = new MobileLibrary("Movistar", "City Center",todosMoviles)

console.log(stock.getName())
console.log(stock.getLocation())
console.log(stock.getMobiles())
console.log(stock.getTotalPriceCalculation())

stock.printLibrary()
*/ 
