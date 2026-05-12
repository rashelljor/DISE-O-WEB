/*
class Persona {
    constructor (nombreP, edadP)
    {
        this.nombre = nombreP
        this.edad = edadP
    }
     trabajar(){
        console.log('trabajar')
    }

    comer(){
        console.log('comer')
        
    }
    dormir(){
        console.log('dormir')
    }

}

//Instancial
let personaUno = new Persona ('Camila', 20)
console.log(personaUno.nombre)
personaUno.comer()
*/

/*
class Persona {
    constructor (nombreP, edadP)
    {
        this.nombre = nombreP
        this.edad = edadP
    }
    trabajar(){
        console.log(this.nombre, ' trabajando')
    }

    comer(){
        console.log(this.nombre, ' comiendo')
        
    }
    dormir(){
        console.log(this.nombre, 'durmiendo')
    }
    robar(){
        console.log(this.nombre, 'robando maridos')
    }

}

//Instancial
let personaUno = new Persona ('Camila', 52)
let personaDos = new Persona ('Diana', 36)

console.log(personaUno.nombre)

personaUno.comer()
personaUno.robar()
personaDos.trabajar()
personaDos.dormir()

*/

class Persona {
    constructor(nombreP, edadP){
        this.nombre = nombreP;
        this.edad = edadP;   
    }
    trabajar(){
        console.log(this.nombre,'trabajando')
    }

    comer(){
        console.log(this.nombre,'comiendo')
        this.#dormir();
        
    }
    #dormir(){
        console.log(this.nombre,'durmiendo')
    }
}

let objetoPersona = new Persona('Lucas', 18)
objetoPersona.comer()
