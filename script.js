let apiKey = "ac5a43a88f0f2a732d96fc99675c6bcb";
// let apiKey2 = 'c041ebae7412d7269acecc78b967adcc';
// let city = 'Santiago';

let difKelviin = 273.15;

let urlBase = "https://api.openweathermap.org/data/2.5/weather";

// Añadiendo un addEvenListener
document.getElementById("botonBusqueda").addEventListener("click", () => {
  // Se guarda en la constante lo ingresado por el usuaruio en el Input
  // Para recolectar ese dato usamos la propiedad value
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});

function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
    .then((data) => data.json())
    .then((data) => mostrarDatosClima(data));
}

function mostrarDatosClima(data) {
  console.log(data);
  const divDatosClima = document.getElementById("datosClima");
  divDatosClima.innerHTML = "";

  // Recolectando info de la data
  const nombreCiudad = data.name;
  const nombrePais = data.sys.country;
  const temperatura = data.main.temp;
  const descripcionTiempo = data.weather[0].description;
  const iconoTiempo = data.weather[0].icon;

  // Creamos variables para crear elementos HTML
  const tituloCiudad = document.createElement("h2");
  // luego pasamos a esos elementos los valores de la data
  tituloCiudad.textContent = `${nombreCiudad} - ${nombrePais}`;
  tituloCiudad.style.color = '#ffffff';

  const infoTemperatura = document.createElement("p");
  infoTemperatura.textContent = `Temperature: ${Math.floor(
    temperatura - difKelviin
  )}°C`;
  infoTemperatura.style.color = '#ffffff';

  const infoTiempo = document.createElement("p");
  infoTiempo.textContent = `Today's weather: ${descripcionTiempo}`;
  infoTiempo.style.color = '#ffffff';

  const icono = document.createElement('img');
  icono.src = `https://openweathermap.org/img/wn/${iconoTiempo}@2x.png`;

  //Añadimos los elementos al div que los contendrá
  divDatosClima.appendChild(tituloCiudad);
  divDatosClima.appendChild(infoTemperatura);
  divDatosClima.appendChild(icono);
  divDatosClima.appendChild(infoTiempo);
}
