// Obtener elementos del DOM y cargar datos
document.addEventListener("DOMContentLoaded", function () {
  const selectEstilo = document.getElementById("estilo");
  const galeria = document.querySelector(".grid");

  // Cargar los datos de los cortes de pelo
  cargarCortes();

  // Agregar event listener al select
  selectEstilo.addEventListener("change", filtrarCortes);

  // Función para cargar los datos de los cortes de pelo desde el archivo data.json
  function cargarCortes() {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => mostrarCortes(data));
  }

  // Función para mostrar los cortes de pelo en la galería
  function mostrarCortes(cortes) {
    galeria.innerHTML = cortes
      .map(
        (corte) => `
        <div class="corte ${corte.estilo}">
          <img src="${corte.imagen}" alt="${corte.nombre}">
          <h3>${corte.nombre}</h3>
        </div>
      `
      )
      .join("");
  }

  // Función para filtrar los cortes de pelo por estilo
  function filtrarCortes() {
    const estiloSeleccionado = selectEstilo.value;
    const cortes = document.querySelectorAll(".corte");

    cortes.forEach((corte) => {
      if (
        estiloSeleccionado === "todos" ||
        corte.classList.contains(estiloSeleccionado)
      ) {
        corte.style.display = "block";
      } else {
        corte.style.display = "none";
      }
    });
  }
});
