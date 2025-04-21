document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const usuarios = [
        {nombre: "Carlos Herrera", equipo: "No Aplica", institucion: "CSM-IT Culiacán", rol: "Administrador", usuario: "cherrera", password: "admin123", archivo: "carlos_herrera.pdf"},
        {nombre: "Ana Martínez", equipo: "No Aplica", institucion: "CSM-IT Culiacán", rol: "Administrador", usuario: "amartinez", password: "admin456", archivo: "ana_martinez.pdf"},
        {nombre: "Luis Gómez", equipo: "No Aplica", institucion: "ITS Sur Guanajuato", rol: "Administrador", usuario: "lgomez", password: "admin789", archivo: "luis_gomez.pdf"},
        {nombre: "María Torres", equipo: "Como", institucion: "ITS Sur Guanajuato", rol: "Participante", usuario: "mtorres", password: "part1234", archivo: "maria_torres.pdf"},
        {nombre: "Javier Sánchez", equipo: "Usurpadores", institucion: "IT La Laguna", rol: "Participante", usuario: "jsanchez", password: "part4567", archivo: "javier_sanchez.pdf"},
        {nombre: "Paula Ramírez", equipo: "Combo Deluxe", institucion: "IT Culiacán", rol: "Coach", usuario: "pramirez", password: "coach123", archivo: "paula_ramirez.pdf"},
        {nombre: "Diego Fernández", equipo: "Internship plis", institucion: "IT Zacatepec", rol: "Participante", usuario: "dfernandez", password: "part789", archivo: "diego_fernandez.pdf"},
        {nombre: "Laura Morales", equipo: "Sistemas ISC", institucion: "ITS Huauchinango", rol: "Coach", usuario: "lmorales", password: "coach456", archivo: "laura_morales.pdf"},
        {nombre: "Andrés Castillo", equipo: "BACAB", institucion: "TESCHANCHS Champoton", rol: "Participante", usuario: "acastillo", password: "part321", archivo: "andres_castillo.pdf"},
        {nombre: "Elena Ríos", equipo: "ITsurus", institucion: "ITS Sur Guanajuato", rol: "Participante", usuario: "erios", password: "part654", archivo: "elena_rios.pdf"},
        {nombre: "Sofía Delgado", equipo: "Los Aferrados", institucion: "IT Ocotlán", rol: "Coach", usuario: "sdelgado", password: "coach789", archivo: "sofia_delgado.pdf"},
        {nombre: "Manuel Vargas", equipo: "Tucanes", institucion: "IT Cancún", rol: "Participante", usuario: "mvargas", password: "part987", archivo: "manuel_vargas.pdf"},
        {nombre: "Carmen León", equipo: "LOCOS DE XOLOco2 Laven", institucion: "ITS Teziutlán", rol: "Coach", usuario: "cleon", password: "coach321", archivo: "carmen_leon.pdf"}
    ];
    sessionStorage.setItem("listaUsuarios", JSON.stringify(usuarios));

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const nombreInput = document.getElementById("txtNombre");
        const passwordInput = document.getElementById("txtPassword");

        if (!nombreInput || !passwordInput) {
            console.error("No se encontraron los campos de entrada");
            return;
        }

        const usuarioValido = usuarios.find(user => 
            user.usuario === nombreInput.value.trim() && 
            user.password === passwordInput.value.trim()
        );

        if (usuarioValido) {
            // Almacenar datos del usuario en sessionStorage
            sessionStorage.setItem("userData", JSON.stringify({
                nombre: usuarioValido.nombre,
                equipo: usuarioValido.equipo,
                institucion: usuarioValido.institucion,
                rol: usuarioValido.rol,
                usuario: usuarioValido.usuario,
                semestre: "6to",
                fechaNacimiento: "18/06/2004"
            }));

            // Redirigir según el rol (convertido a minúsculas para coincidir)
            const rol = usuarioValido.rol.toLowerCase();
            const redirigirUrl = {
                administrador: "../Admin/vistaAdministrador.html",
                coach: "../Coach/vistaCoach.html",
                participante: "../Participante/vistaParticipante.html"
            };

            // Redirigir a la página correspondiente o a Usuario.html
            window.location.href = redirigirUrl[rol] || "../Usuario.html";
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    });

    // Validación visual de campos
    const nombreInput = document.getElementById("txtNombre");
    const passwordInput = document.getElementById("txtPassword");

    [nombreInput, passwordInput].forEach(input => {
        input.addEventListener("input", function() {
            const validIcon = this.parentElement.querySelector(".valid-icon");
            const invalidIcon = this.parentElement.querySelector(".invalid-icon");
            
            if (this.checkValidity()) {
                validIcon.style.display = "inline";
                invalidIcon.style.display = "none";
            } else {
                validIcon.style.display = "none";
                invalidIcon.style.display = "inline";
            }
        });
    });
}); 