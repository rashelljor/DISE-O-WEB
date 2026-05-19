const formularioActualizar = document.getElementById('formularioActualizar');
let personas = JSON.parse(localStorage.getItem('personas')) || [];

function actualizar () {
    let pos = parseInt(document.getElementById('pos').value);
    let nombre = document.getElementById('nombre').value;
    let edad = parseInt(document.getElementById('edad').value);
    let correo = document.getElementById('correo').value;

    
    personas.forEach((persona, index) => {
        if (index === pos) {
            persona.nombre = nombre;
            persona.edad = edad;
            persona.correo = correo;
        }
    });
    localStorage.setItem('personas', JSON.stringify(personas));
    alert('Persona actualizada correctamente');
    LimpiarFormulario();
}

function LimpiarFormulario() {
    formularioActualizar.reset();
}

function Eliminar() {
    let pos = parseInt(document.getElementById('indice').value);
    personas = personas.filter((p, index) => index !== pos);

    localStorage.setItem('personas', JSON.stringify(personas));
    alert('Persona eliminada correctamente');
    LimpiarFormulario();
}

formularioActualizar.addEventListener('submit', (e) => {
   // e.preventDefault();
    actualizar();
});

formularioEliminar.addEventListener('submit', (e) => {
    //e.preventDefault();
    Eliminar();
});