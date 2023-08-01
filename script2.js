let cronometro1;
let cronometro2;
let tiempoInicial = 45 * 60; // Duración de cada tiempo en segundos

// Función para formatear el tiempo en formato MM:SS
function formatearTiempo(tiempo) {
    let minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;
    return `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
}

// Función para actualizar el cronómetro
function actualizarCronometro(numeroCronometro, tiempoRestante) {
    let elementoCronometro = document.getElementById(`cronometro${numeroCronometro}`);
    elementoCronometro.textContent = formatearTiempo(tiempoRestante);

    if (tiempoRestante === 0) {
        clearInterval(numeroCronometro === 1 ? cronometro1 : cronometro2);
    }

    tiempoRestante--;
}

// Función para iniciar el cronómetro correspondiente
function iniciarCronometro(numeroCronometro) {
    let tiempoRestante = tiempoInicial;
    let intervalo = setInterval(function() {
        actualizarCronometro(numeroCronometro, tiempoRestante);
        tiempoRestante--;
    }, 1000);

    // Guardar el intervalo en la variable correspondiente
    if (numeroCronometro === 1) {
        cronometro1 = intervalo;
    } else if (numeroCronometro === 2) {
        cronometro2 = intervalo;
    }
}

// Function to toggle dark/light mode
function toggleDarkLightMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
