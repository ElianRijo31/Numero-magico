let numeroMagico = Math.floor(Math.random() * 10) + 1;

let intentos = 0;

function verificarNumero() {
    let numeroUsuario = document.getElementById("numeroUsuario").value;
    let mensaje = document.getElementById("mensaje");

    if (numeroUsuario === "") {
        mensaje.textContent = "Por favor, ingresa un número.";
        return;
    }

    numeroUsuario = parseInt(numeroUsuario);

    if (numeroUsuario < 1 || numeroUsuario > 10) {
        mensaje.textContent = "El número debe estar entre 1 y 10.";
        return;
    }

    intentos++;

    if (numeroUsuario === numeroMagico) {
        mensaje.textContent = "Correcto! Adivinaste en " + intentos + " intentos.";
    } else if (numeroUsuario < numeroMagico) {
        mensaje.textContent = "El número mágico es más alto. Intenta de nuevo.";
    } else {
        mensaje.textContent = "El número mágico es más bajo. Intenta de nuevo.";
    }
}
