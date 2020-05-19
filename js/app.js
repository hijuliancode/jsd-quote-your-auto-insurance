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
Seguro.prototype.cotizarSeguro = function() {
  const { marca, anio, tipo } = this;
  /**
   * 1 = americano 1.15
   * 2 = asiatico 1.05
   * 3 = europeo 1.35
   */
  let cantidad;
  const base = 2000;
  switch(marca) {
    case '1':
      cantidad = base * 1.15
      break
    case '2':
      cantidad = base * 1.05
      break
    case '3':
      cantidad = base * 1.35
      break
  }

  // Leer y calcular diferencia de años
  const diferencia = new Date().getFullYear() - anio;
  // Cada año de diferencia hay que reducir el 3% del seguro
  cantidad -= ((diferencia * 3) * cantidad) / 100;

  /**
   * Si el seguro es básico se multiplica por 30% más
   * Si el seguro es completo se multiplica por 50% más
   */
  (tipo === 'basico')
    ? cantidad *= 1.30
    : cantidad *= 1.50;

    console.log(cantidad)
    return cantidad;
}
function Interfaz() {}
// Mensaje que se imprime en el html
Interfaz.prototype.mostrarMensaje = (mensaje, tipo) => {
  const div = document.createElement('div');

  (tipo === 'error')
    ? div.classList.add('mensaje', 'error')
    : div.classList.add('mensaje', 'correcto')

  div.innerHTML = `${mensaje}`
  formulario.insertBefore(div, document.querySelector('.form-group'))
  setTimeout(() => {
    document.querySelector('.mensaje').remove()
  }, 3000);
}

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
    interfaz.mostrarMensaje('Faltan datos, revisa el formulario y prueba de nuevo', 'error')
  } else {
    // Instanciar seguro y mostrar interfaz
    const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo)
    // cotizar seguro
    const cantidad = seguro.cotizarSeguro()
  }
}