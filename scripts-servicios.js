// Definición de los servicios y sus descripciones
const services = {
    "monitoreo": {
        title: "Monitoreo Constante de Condiciones Crónicas",
        description: "Con nuestro servicio de monitoreo constante, puedes llevar un control exhaustivo de tus condiciones de salud, como la diabetes e hipertensión, desde la comodidad de tu hogar. Nuestro equipo médico te supervisa en tiempo real para que nunca te sientas solo en tu tratamiento."
    },
    "consultas": {
        title: "Consultas en Línea con Especialistas",
        description: "A través de nuestro sistema de consultas en línea, puedes recibir atención médica de especialistas en cualquier momento. Ya no es necesario desplazarse ni hacer largas filas para ser atendido, solo conéctate y tendrás a tu médico disponible."
    },
    "asesoria": {
        title: "Asesoría Personalizada en el Tratamiento",
        description: "Te ofrecemos una asesoría completa y personalizada para adaptar tu tratamiento según tus resultados y necesidades específicas. Nuestro objetivo es garantizar que cada paciente reciba el tratamiento adecuado y que puedas ajustarlo en cualquier momento."
    }
};

// Función para mostrar los detalles del servicio
function showServiceDetails(serviceKey) {
    const service = services[serviceKey];
    document.getElementById('service-title').innerText = service.title;
    document.getElementById('service-description').innerText = service.description;
    document.getElementById('service-details').style.display = 'block';
    document.getElementById('close-details').style.display = 'inline-block';
}

// Función para cerrar los detalles del servicio
function closeServiceDetails() {
    document.getElementById('service-details').style.display = 'none';
}
