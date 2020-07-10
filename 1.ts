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
       this.mobiles = mobiles
       
    
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

    totalPriceCalculation(){
        return this.totalPrice
    }

}