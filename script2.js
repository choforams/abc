document.addEventListener('DOMContentLoaded', () => {
    const fechaHoraElement = document.getElementById('fecha-hora');
    const periodoElement = document.getElementById('periodo');
    const tiempoElement = document.getElementById('tiempo');
    const faltasElement = document.getElementById('faltas');
    const anotacionesElement = document.getElementById('anotaciones');
    const modoBoton = document.getElementById('modo-boton');
    let isModoOscuro = false;
  
    function obtenerDatosDelPartido() {
      // Lógica para obtener los datos del partido desde una API o fuente de datos
      // Ejemplo: Simulación de datos
      const datosPartido = {
        periodo: '1er tiempo',
        tiempo: '00:00',
        faltas: 0,
        anotaciones: 0
      };
  
      // Actualizar los elementos con los datos del partido
      periodoElement.textContent = datosPartido.periodo;
      tiempoElement.textContent = datosPartido.tiempo;
      faltasElement.textContent = datosPartido.faltas;
      anotacionesElement.textContent = datosPartido.anotaciones;
    }
  
    function mostrarFechaHoraActual() {
      const fechaHoraActual = new Date();
      const fechaHoraTexto = fechaHoraActual.toLocaleString('es-MX');
      fechaHoraElement.textContent = fechaHoraTexto;
    }
  
    function convertirDatosEnBotones() {
      periodoElement.innerHTML = `<button><i class="fa-regular fa-font-awesome"></i> ${periodoElement.textContent}</button>`;
      tiempoElement.innerHTML = `<button><i class="fa-solid fa-timeline"></i> ${tiempoElement.textContent}</button>`;
      faltasElement.innerHTML = `<button><i class="fa-solid fa-person-falling-burst"></i> ${faltasElement.textContent}</button>`;
      anotacionesElement.innerHTML = `<button><i class="fa-regular fa-futbol"></i> ${anotacionesElement.textContent}</button>`;
    }
  
    function alternarModo() {
      isModoOscuro = !isModoOscuro;
      if (isModoOscuro) {
        document.body.classList.add('modo-oscuro');
        modoBoton.textContent = 'Dark';
      } else {
        document.body.classList.remove('modo-oscuro');
        modoBoton.textContent = 'Light';
      }
    }
  
    function actualizarTiempo() {
      // Código del cronómetro aquí (como se muestra en respuestas anteriores)
    }
  
    function iniciarCronometro() {
      // Código del cronómetro aquí (como se muestra en respuestas anteriores)
    }
  
    function mostrarInformacionEquipo(equipo) {
      alert(`Haz hecho clic en el equipo ${equipo}`);
    }
  
    obtenerDatosDelPartido();
    mostrarFechaHoraActual();
    convertirDatosEnBotones();
    iniciarCronometro();
  
    // Actualizar la hora cada segundo
    setInterval(mostrarFechaHoraActual, 1000);
  
    // Evento para alternar el modo claro y oscuro al hacer clic en el botón
    modoBoton.addEventListener('click', alternarModo);
  
    // Eventos para los botones de los equipos
    const equipoLocalBoton = document.querySelector('.equipo:nth-child(1) h2');
    const equipoVisitanteBoton = document.querySelector('.equipo:nth-child(2) h2');
  
    equipoLocalBoton.addEventListener('click', () => mostrarInformacionEquipo('local'));
    equipoVisitanteBoton.addEventListener('click', () => mostrarInformacionEquipo('visitante'));
  });
  