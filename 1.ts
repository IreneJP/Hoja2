/*Crear una clase que se denomine MobileLibrary que contenga los
siguientes atributos privados:
• name : string
• location : string
• mobiles : Mobile[]
• totalPrice: number */
import {Mobile} from "./1_mobile"

export class MobileLibrary {
        private name:string;
        private location : string
        private mobiles : Mobile[]
        private totalPrice: number

//Crear un constructor que tome como parámetros de entrada el name, location y el array de objetos de la clase Mobile.

    constructor(name:string, location : string, mobiles : Mobile[])   
    {
       this.name = name;
       this.location = location;
       this.mobiles = mobiles;
       this.totalPriceCalculation();
    }

//Crear los métodos settes y getters para todos los atributos

    public getName()
    {
        return this.name  
    }
    public setName(name:string)
    {
        this.name = name
    }
    public getLocation()
    {
            return this.location 
    }     
    public setLocation(location:string)
    {
        this.location = location
    }
    public getMobiles()
    {
            return this.mobiles  
    }  
    public setMobiles(moviles:string)
    {
        this.mobiles = this.mobiles
    }
  

    //4 Crear una función denominada totalPriceCalculation que te calcule el precio total de la librería (suma de los precios de todos los objetos almacenados en el atributo mobiles).

    private totalPriceCalculation (){
        let precio:number = Number()
            for(let i=0; i< this.mobiles.length; i++ ){
            precio += this.mobiles[i].getPrice()
            }
            return precio
            }

     public getTotalPriceCalculation(){
            {
            return this.totalPriceCalculation()
            }   
        }  

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

public printLibrary(){
    let library:string = ""
    for(let i=0; i< this.mobiles.length; i++ ){
        library += this.mobiles[i].print()+ "/n"
    }
    console.log("This is all my mobiles: " + "\n" + library +"\n" ) 
    }
} //NO ME SALE!!


//12. En el fichero principal crear los objetos necesarios para crear un nuevo objeto de la clase MobileLibrary y comprobar todos sus métodos

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
