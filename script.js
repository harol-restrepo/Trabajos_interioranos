function enviarInformacion(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var materia = document.getElementById('materia').value;
    var fechaEntrega = document.getElementById('fechaEntrega').value;
    var metodoPago = document.getElementById('metodoPago').value;

    // Aquí deberías enviar estos datos a tu servidor para que maneje el envío del correo.
    // Puedes utilizar tecnologías como Node.js, PHP, Python, etc., para manejar el envío del correo electrónico.
    // La siguiente línea solo es un ejemplo de cómo podrías imprimir estos datos en la consola.
    console.log('Nombre:', nombre, 'Materia:', materia, 'Fecha de Entrega:', fechaEntrega, 'Método de Pago:', metodoPago);

    mostrarMensajeConfirmacion();
}

function mostrarMensajeConfirmacion() {
    var formulario = document.getElementById('trabajoForm');
    formulario.reset(); // Limpia el formulario después de enviar la información.

    var mensaje = document.createElement('p');
    mensaje.className = 'confirmation-message';
    mensaje.textContent = '¡Información enviada con éxito! Nos pondremos en contacto contigo pronto.';
    
    formulario.appendChild(mensaje);

    // Puedes ajustar el tiempo de visualización del mensaje o agregar estilos adicionales según tus necesidades.
    setTimeout(function() {
        mensaje.style.display = 'none';
    }, 5000);
}
