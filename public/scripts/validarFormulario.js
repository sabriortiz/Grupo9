// para nombre
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();

  const errorNombre = document.getElementById("error-nombre");

  if (nombre === "" || nombre.length < 3) {
    errorNombre.textContent = "por favor ingrese un nombre valido";
  } else {
    errorNombre.textContent = "";
  }

  //para email
  const email = document.getElementById("email").value.trim();
  console.log("email ingresado: ", email);
  const errorEmail = document.getElementById("error-email");
  if (email === "") {
    errorEmail.textContent = "El email es obligatorio";
  } else if (!email.includes("@")) {
    errorEmail.textContent = "El email no parece válido";
  } else {
    errorEmail.textContent = "";
  }

  //validar mensaje
  const mensaje = document.getElementById("mensaje").value.trim();
  const errorMensaje = document.getElementById("error-mensaje");
  if (mensaje === "") {
    errorMensaje.textContent = "El mensaje no puede estar vacio";
  } else if (mensaje.length < 10) {
    errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres";
  } else {
    errorMensaje.textContent = "";
  }

  //mostrar mensaje de exito
  const mensajeExito = document.getElementById("mensaje-exito");
  if (
    errorNombre.textContent === "" &&
    errorEmail.textContent === "" &&
    errorMensaje.textContent === ""
  ) {
    mensajeExito.textContent = "Mensaje enviado correctamente";
    mensajeExito.style.display = "block";
    form.reset(); // esto limpia los campos
  }
  setTimeout(() => {
    mensajeExito.style.display = "none";
  }, 4000);
});
