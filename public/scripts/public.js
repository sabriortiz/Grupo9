const leyendas = [];

function mostrarLeyendas() {
  const contenedor = document.getElementById("leyendas-container");
  contenedor.innerHTML = "";
  leyendas.forEach((leyenda) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      ${
        leyenda.imagen
          ? `<img src="${leyenda.imagen}" alt="${leyenda.titulo}"/>`
          : ""
      }
      <div class="card-content">
        <h3>${leyenda.titulo}</h3>
        <p><strong>Región:</strong> ${leyenda.region}</p>
        <p>${leyenda.contenido}</p>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

document.getElementById("leyendaForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nuevaLeyenda = {
    titulo: document.getElementById("titulo").value,
    region: document.getElementById("region").value,
    contenido: document.getElementById("contenido").value,
    imagen: document.getElementById("imagen").value,
  };
  leyendas.push(nuevaLeyenda);
  mostrarLeyendas();
  this.reset();
});

mostrarLeyendas();
