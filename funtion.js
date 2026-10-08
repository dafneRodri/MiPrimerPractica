// Función para cambiar el tema de la página
const btnTema2 = document.querySelector('#DMRR_cambiarColor');
const padre = document.getElementById('DMRR_divPadre');
btnTema2.addEventListener('click', () => {
    padre.classList.toggle('cambio_color');
    document.body.classList.toggle('cambio_fondo');
    if (padre.classList.contains('cambio_color')) {
        btnTema2.textContent = 'Colores claros (:';
    } else {
        btnTema2.textContent = 'Colores Intensos';
    }
    console.log('Se aplicó transparente:',padre.classList.contains('cambio_color'));
});

const form = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const preguntaInput = document.getElementById('PreguntaObra');
const divrespuesta = document.getElementById('respuesta');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    divrespuesta.innerHTML = '';
    const errores = [];
    if (nombreInput.value.trim() === '') {
        errores.push('El campo nombre es obligatorio.');
    }
    if (correoInput.value.trim() === '') {
        errores.push('El campo correo es obligatorio.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoInput.value)) {
        errores.push('El correo no es válido.');
    }
    if (preguntaInput.value.trim() === '') {
        errores.push('El campo de opinión es obligatorio.');
    }
    if (errores.length > 0) {
        divrespuesta.style.color = 'red';
        divrespuesta.innerHTML = errores.join('<br>');

    } else {
        divrespuesta.style.color = 'green';
        divrespuesta.innerHTML = 'Formulario enviado correctamente.';
        form.reset();
    }
});