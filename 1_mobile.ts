
//Crear una clase llamada Mobile con las siguientes características:
//• Propiedades Publicas :§ name, § model, § trademark, § sdSize, § color, § is5G, § cameraNumber, § price
//• Constructor a través del cual pueda inicializar todos los atributos

export class Mobile {
        private name:string;
        private model:string;
        private trademark:string
        private sdSize:number
        private color:string
        private is5G:boolean
        private cameraNumber:number
        private price: number
    constructor(name:string, model:string, trademark:string, sdSize:number, color:string, is5G:boolean, cameraNumber:number, price:number)   
    {
        this.name = name;
        this.model = model;
        this.trademark = trademark
        this.sdSize = sdSize
        this.color = color
        this.is5G = is5G
        this.cameraNumber = cameraNumber
        this.price = price
    }


    //Modificar la clase anterior para que todos los atributos sean privados y crear los métodos setters y getters para cada atributo.

public getName()
{
    return this.name  
}
public setName(name:string)
{
    this.name = name
}
public getModel()
{
        return this.model  
}     
public setModel(model:string)
{
    this.model = model
}
public getTrademark()
{
        return this.trademark  
}  
public setTrademark(trademark:string)
{
    this.trademark = trademark
}
public getSdSize()
{
                return this.sdSize  
}  
public setSdSize(sdSize:number)
{
    this.sdSize = sdSize
}
public getColor()
{
                return this.color  
} 
public setColor(color:string)
{
    this.color = color
} 
public getIs5G()
{
                return this.is5G  
}

public setIs5G(is5G:boolean)
{
    this.is5G = is5G
}
public getCamera()
{
        return this.cameraNumber  
}
public setCamera(cameraNumber:number)
{
    this.cameraNumber = cameraNumber
}
public getPrice()
{
                return this.price  
}
public setPrice(price:number)
{
    this.price = price
}
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
public print(){
    console.log("Name: " + this.name+ "\n" + "Model: " + this.model + "\n" + "Trademark: " + this.trademark + "SD Size (GB): " + this.sdSize + "\n" + "Color: " + this.color + "\n" + "Is 5g?: " + this.is5G + "\n" + "Number of Cameras: " + this.cameraNumber)


    
}
}

