document.addEventListener("DOMContentLoaded", function() {
    const enlaceInicio = document.getElementById("enlaceInicio");
    const userData = sessionStorage.getItem("userData");
    
    if (!enlaceInicio) {
        console.error("No se encontró el elemento con ID 'enlaceInicio'");
        return;
    }

    if (userData) {
        const user = JSON.parse(userData);
        const rol = user.rol.toLowerCase();
        
        switch (rol) {
            case "administrador":
                enlaceInicio.href = "../Admin/vistaAdministrador.html";
                break;
            case "coach":
                enlaceInicio.href = "../Coach/vistaCoach.html";
                break;
            case "participante":
                enlaceInicio.href = "../Participante/vistaParticipante.html";
                break;
            default:
                enlaceInicio.href = "../Inicio/inicio.html";
        }
    } else {
        enlaceInicio.href = "../Inicio/inicio.html";
    }
});