alert('Bienvenidos')

//ESTRUCTURA SECUENCIAL
/*
let nombre = 'Juancho';
const  valorPI = 3.1416;
console.log(nombre)
console.log(valorPI)


let apellido = prompt('Ingresa tu feo apellido')
console.log(apellido)

let valorUNO= parseInt(prompt ('Ingresa el primer valor'))
let valorDOS= parseInt(prompt ('Ingresa el segundo valor'))
let resultado = 0
resultado = valorUNO +valorDOS
console.log(resultado)
*/

//ESTRUCCTURAS CONDICIONALES
// Operador y = &&
//Operador o = ||
/*
let edad = 10
let altura = 1.70

if (edad>=18 || altura >=1.70) {
    console.log('Hasta ahí nomás te quedas')
} else {
    console.log("Tienes futuro en la NBA")
}

*/

//.toLowerCase() chiquito
//.toUpperCase() grande
/*
let nombre = prompt('Ingresa tu nombre:').toUpperCase()

switch (nombre) {
    case 'LUIS':
        console.log('Caso 1')
        break;

    case 'LUZ':
        console.log('Caso 2')
        break;

    case 'PETER':
        console.log('Caso 3')
        break;
    
    default:
        console.log('Nada que ver, amix')
        break;
}


let edad = 20
let resultado = edad >=18 ? console.log('Mensaje 1') : console.log('Mensaje 02')

*/

//REPETITIVAS
/*
let contador = 0;
while (contador <=10) {
    console.log(contador)
    contador = contador +1
}
*/



/*
let edad = 10
let nuevaEdad = '10'

if (edad ==nuevaEdad) {
    console.log('Mensaje 01')
}else {
    console.log('Mensaje 02')
}
*/


/*
let frutas =['manzana', 'naranja', 'uva']
let frutas2 = []
frutas.push('fresa')
console.log(frutas.length)
console.log(frutas)
frutas.pop()
console.log(frutas)

for (fruta of frutas)
    console.log(fruta)
if (fruta == 'naranja'){
    break
}


frutas2 = [... frutas]
*/


let usuario = {
    'nombre': 'Pepito',
    'edad': 20
}

usuario = {...usuario, 'apellido' : 'Quispe', 'edad': 30}
console.log(usuario)
console.log(usuario.edad)