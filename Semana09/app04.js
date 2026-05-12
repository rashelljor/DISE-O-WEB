class Animal {
    hacerruido()
    {

    }
}

class Perro extends Animal {
    hacerruido()
    {
        console.log('guau guau')
    }
    #correr(){
        console.log('Corriendo')
    }
}

class Gato extends Animal {
    hacerruido()
    {
        console.log('Miau miau')
    }

    #dormir(){
        console.log('Durmiendo')
    }
}

let objetoPerro = new Perro ()
let objetoGato = new Gato ()
objetoPerro.hacerruido()
objetoGato.hacerruido()