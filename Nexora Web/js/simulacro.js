// 1. Selección de elementos del DOM
// Guardamos en constantes los elementos HTML con los que vamos a interactuar usando su ID.
const btnSimulacro = document.getElementById('btn-simulacro');
const bannerPrueba = document.getElementById('banner-prueba');

// Variable de estado para saber si el simulacro está activo o no.
let simulacroActivo = false;

// 2. Escucha de eventos (Event Listener)
// Escuchamos el evento 'click' en el botón del menú.
btnSimulacro.addEventListener('click', function() {
    
    // Invertimos el estado actual (si era false, pasa a true, y viceversa)
    simulacroActivo = !simulacroActivo;

    if (simulacroActivo) {
        // 3. Cambios en la interfaz (MODO PRUEBA ON)
        // Quitamos la clase 'oculto' para que el banner sea visible.
        bannerPrueba.classList.remove('oculto');
        
        // Cambiamos el texto del botón para indicar la acción contraria.
        btnSimulacro.textContent = "Desactivar Simulacro";
        
        // Emitimos la alerta de práctica usando el método nativo del navegador.
        alert("ALERTA DE PRÁCTICA: Inicio de simulacro coordinado. Por favor, evalúen los tiempos de respuesta.");
    } else {
        // 4. Revertir los cambios (MODO PRUEBA OFF)
        // Volvemos a añadir la clase 'oculto' al banner.
        bannerPrueba.classList.add('oculto');
        
        // Restauramos el texto original del botón.
        btnSimulacro.textContent = "Activar Simulacro";
    }
});