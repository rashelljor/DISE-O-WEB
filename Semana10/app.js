const formularioRefistro = document.getElementById('formularioRegistro')
let personas = JSON.parse(localStorage.getItem('personas')) || []

function guardar(){
    let nombre = document.getElementById('nombre').value
    let edad = parseInt(document.getElementById('edad').value)
    let correo = document.getElementById('correo').value
    
    let persona = {
        'nombre': nombre,
        'edad': edad,
        'correo': correo,
    }

    personas.push(persona)

    localStorage.setItem('personas', JSON.stringify(personas))
    alert('Registro guardado correctamente')
    limpiar()
    mostrar()
}

function limpiar(){
    formularioRefistro.reset()
}

function mostrar(){
    const registros = document.getElementById('registros')

    registros.innerHTML = ''

    personas.forEach((persona, indice) => {
        indice += 1
        registros.innerHTML += '<tr>'+
        '<td>'+indice+'</td>'+
        '<td>'+persona.nombre+'</td>'+
        '<td>'+persona.edad+'</td>'+
        '<td>'+persona.correo+'</td>'+
        '</tr>'
    })
}


formularioRefistro.addEventListener('submit', (e)=>{
    //e.preventDefault()
    guardar()
})

mostrar()