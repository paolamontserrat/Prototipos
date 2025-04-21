document.addEventListener("DOMContentLoaded", function() {
    // Obtener los datos del usuario desde sessionStorage
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    
    if (userData) {
        // Mostrar los datos del usuario
        document.querySelector(".user-name").textContent = userData.nombre;
        document.querySelector(".user-team").textContent = userData.equipo;
        document.querySelector(".user-institution").textContent = userData.institucion;
        document.querySelector(".user-role").textContent = userData.rol;
        
        const coachElement = document.querySelector(".user-coach");
        if (userData.rol.toLowerCase() === "administrador" || userData.rol.toLowerCase() === "coach") {
            coachElement.textContent = "No Aplica";
        } else {
            coachElement.textContent = "No especificado";
        }
    } else {
        window.location.href = "../Inicio/Inicio.html";
    }
});