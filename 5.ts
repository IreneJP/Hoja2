//5. En un nuevo fichero crear 4 objetos de la clase mobile y un array que los contenga.

import {Mobile} from "./1_mobile"
import { MobileLibrary} from "./1"

let movil1 = new Mobile("iPhone", "8", "Apple", 64, "Grey", false, 2, 419)
let movil2 = new Mobile("Xiaomi", "Redmi Note 95", "Xiaomi",128,"Blue",false, 4,224)
let movil3 = new Mobile("Huawei ", "P40", "Huawei ", 128,"Negro", true,4,799)
let movil4 = new Mobile("LG", "V50 ThinQ 5G ", "LG",128, "white",true,4, 999)

let moviles = [movil1, movil2, movil3, movil4]

//6. Crear un objeto de la clase MobileLibrary y asignarle el array que habéis creado previamente

let miBibio = new MobileLibrary("Vodafone", "Centro Comercial",moviles)

//7.Comprobar que todos los métodos del objeto funcionan perfectamente.


console.log(miBibio.getName())
console.log(miBibio.getLocation())
console.log(miBibio.getMobiles())
console.log(miBibio.getTotalPriceCalculation())


//11. Crear un nuevo método denominado printLibrary que recorra todos losobjetos del atributo mobile y los muestre por consola
miBibio.printLibrary()




