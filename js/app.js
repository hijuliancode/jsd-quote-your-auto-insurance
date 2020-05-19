// Variables
const selectAnios = document.getElementById('anio'),
      max = new Date().getFullYear(),
      min = max - 20;

// Listeners
eventListeners()
function eventListeners() {
  document.addEventListener('DOMContentLoaded', iniciarApp)
}

// Funciones
function iniciarApp() {
  console.log('iniciarApp')
  cargarAnios()
}
function cargarAnios() {
  for (let i = max; i >= min; i--) {
    let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;

    selectAnios.appendChild(option)
  }
}