// 1. Datos simulados (Mock data)
const incidentesRegistrados = [
  { id: 1, hora: "10:45", evento: "Evacuación completada en zona baja", criticidad: "Baja" },
  { id: 2, hora: "09:15", evento: "Alerta temprana activada por sensor de caudal", criticidad: "Alta" },
  { id: 3, hora: "09:30", evento: "Ruta principal bloqueada por deslizamiento", criticidad: "Crítica" },
  { id: 4, hora: "10:00", evento: "Apertura de ruta alterna confirmada por líder", criticidad: "Media" }
];

// 2. Selección de elementos del DOM
const contenedorIncidentes = document.getElementById('lista-incidentes');
const btnExportar = document.getElementById('btn-exportar');

// 3. Función para ordenar y mostrar el historial
function mostrarHistorialCronologico() {
  const incidentesOrdenados = incidentesRegistrados.sort(function(a, b) {
    return a.hora.localeCompare(b.hora);
  });

  contenedorIncidentes.innerHTML = '';

  incidentesOrdenados.forEach(function(incidente) {
    const tarjeta = document.createElement('article');
    tarjeta.classList.add('tarjeta');
    
    tarjeta.innerHTML = `
      <h3>${incidente.hora}</h3>
      <p><strong>Nivel:</strong> ${incidente.criticidad}</p>
      <p>${incidente.evento}</p>
    `;
    
    contenedorIncidentes.appendChild(tarjeta);
  });
}

// 4. Función para exportar los datos (Simulación de descarga sin internet)
function exportarDatos() {
  let contenidoCSV = "Hora,Criticidad,Evento\n";

  incidentesRegistrados.forEach(function(inc) {
    contenidoCSV += `${inc.hora},${inc.criticidad},${inc.evento}\n`;
  });

  const blob = new Blob([contenidoCSV], { type: 'text/csv;charset=utf-8;' });
  const urlTemporal = URL.createObjectURL(blob);

  const enlaceDescarga = document.createElement('a');
  enlaceDescarga.href = urlTemporal;
  enlaceDescarga.setAttribute('download', 'historial_emergencia.csv');
  
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click(); 
  
  document.body.removeChild(enlaceDescarga);
}

// 5. Escuchadores de Eventos (Event Listeners)
document.addEventListener('DOMContentLoaded', mostrarHistorialCronologico);
btnExportar.addEventListener('click', exportarDatos);