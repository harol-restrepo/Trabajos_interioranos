function mostrarCursos() {
    alert("Explora nuestros emocionantes cursos en línea para mejorar tus habilidades académicas.");
}

function mostrarRecursos() {
    alert("Descubre una variedad de recursos educativos, desde libros hasta videos, para apoyar tu aprendizaje.");
}

function mostrarAsesoramiento() {
    alert("Nuestro equipo de asesoramiento académico está aquí para brindarte consejos y orientación.");
}

function mostrarFormulario() {
    var trabajoInfo = prompt("Ingrese la información sobre el trabajo que desea mejorar a nota:");
    if (trabajoInfo !== null && trabajoInfo.trim() !== "") {
        alert("Gracias por enviar la información. Trabajaremos para proporcionar recursos que te ayuden.");
    } else {
        alert("No se ingresó información. Por favor, inténtelo de nuevo si desea enviar detalles sobre su trabajo.");
    }
}
