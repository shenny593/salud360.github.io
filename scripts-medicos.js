// Lista de médicos (ejemplo de datos)
const doctors = [
    { name: "Dr. Carlos Martínez", specialty: "Endocrinólogo", img: "doctor1.jpg" },
    { name: "Dra. Ana Pérez", specialty: "Cardióloga", img: "doctor2.jpg" },
    { name: "Dr. Juan Gómez", specialty: "Neurólogo", img: "doctor3.jpg" },
    { name: "Dra. María Rodríguez", specialty: "Ginecóloga", img: "doctor4.jpg" },
];

// Función para mostrar los perfiles de los médicos
function displayDoctors() {
    const doctorList = document.getElementById('doctor-list');

    // Generar dinámicamente cada perfil de médico
    doctors.forEach(doctor => {
        const doctorProfile = `
            <div class="doctor-profile">
                <img src="${doctor.img}" alt="Foto de ${doctor.name}">
                <h4>${doctor.name}</h4>
                <p>Especialidad: ${doctor.specialty}</p>
            </div>
        `;
        doctorList.innerHTML += doctorProfile;
    });
}

// Llamar a la función para mostrar los médicos al cargar la página
window.onload = displayDoctors;

// Función para filtrar médicos por especialidad
function filterDoctors() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const doctorProfiles = document.querySelectorAll('.doctor-profile');

    doctorProfiles.forEach(profile => {
        const specialty = profile.querySelector('p').textContent.toLowerCase();
        if (specialty.includes(searchInput)) {
            profile.style.display = 'block';
        } else {
            profile.style.display = 'none';
        }
    });
}
