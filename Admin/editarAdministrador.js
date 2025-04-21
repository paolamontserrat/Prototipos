document.addEventListener("DOMContentLoaded", () => {
    // Obtener la lista de usuarios desde sessionStorage
    const usuariosGuardados = sessionStorage.getItem("listaUsuarios");
    const participantes = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];
    
    const tabla = document.getElementById("tabla-participantes");

    // Limpiar la tabla antes de agregar nuevos datos
    tabla.innerHTML = '';

    participantes.forEach((part, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${part.nombre}</td>
            <td>${part.equipo}</td>
            <td>${part.institucion}</td>
            <td>
                <span id="pwd-${index}" class="pwd-hidden">********</span>
                <button class="ojo" onclick="togglePassword(${index}, '${part.password}')"><i class="fa-solid fa-eye"></i></button>
            </td>
            <td>${part.rol}</td>
            <td>
                <a href="pdfs/${part.archivo}" target="_blank">
                    <button class="ojo"><i class="fa-solid fa-id-badge"></i></button>
                </a>
                <button class="ojo"><i class="fa-solid fa-pen-to-square"></i></button>
            </td>
        `;
        tabla.appendChild(fila);
    });
});
function togglePassword(index, password) {
    const span = document.getElementById(`pwd-${index}`);
    if (span.classList.contains("pwd-hidden")) {
        span.textContent = password;
        span.classList.remove("pwd-hidden");
    } else {
        span.textContent = "********";
        span.classList.add("pwd-hidden");
    }
}