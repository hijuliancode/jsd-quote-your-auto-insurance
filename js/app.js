// Variables
const selectAnios = document.getElementById('anio'),
      max = new Date().getFullYear(),
      min = max - 20,
      formulario = document.getElementById('cotizar-seguro');

// Constructores
function Seguro(marca, anio, tipo) {
  this.marca = marca;
  this.anio = anio;
  this.tipo = tipo;
}
function Interfaz() {}

// Listeners
eventListeners()
function eventListeners() {
  document.addEventListener('DOMContentLoaded', iniciarApp)
  formulario.addEventListener('submit', enviarFormulario);
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
function enviarFormulario(e) {
  e.preventDefault();

  const marca = document.getElementById('marca'),
        marcaSeleccionada = marca.options[marca.selectedIndex].value;

  const anio = document.getElementById('anio'),
        anioSeleccionado = anio.options[anio.selectedIndex].value;

  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  // Crear instancía de interfaz
  const interfaz = new Interfaz();
  if(marcaSeleccionada == '' || anioSeleccionado == '' || tipo == '') {
    // Interfaz Imprimiendo Error
    console.log('Faltan Datos')
  } else {
    // Instanciar seguro y mostrar interfaz
  }
}