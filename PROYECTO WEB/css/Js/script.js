const formulario = document.getElementById("reservaForm");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const entrada = document.getElementById("entrada").value;
  const salida = document.getElementById("salida").value;
  const habitacion = document.getElementById("habitacion").value;

  let mensaje = document.querySelector(".mensaje-reserva");

  if (!mensaje) {
    mensaje = document.createElement("p");
    mensaje.className = "mensaje-reserva";
    formulario.appendChild(mensaje);
  }

  if (nombre === "" || correo === "" || entrada === "" || salida === "" || habitacion === "") {
    mensaje.textContent = "completa tus datos para poder enviar tu reserva.";
    mensaje.style.color = "#2343ae";
    return;
  }

  if (salida <= entrada) {
    mensaje.textContent = "La fecha de salida debe ser posterior a la fecha de entrada.";
    mensaje.style.color = "#2d2ac9";
    return;
  }

  mensaje.textContent = `Gracias, ${nombre}. Tu reserva para ${habitacion} fue enviada correctamente.`;
  mensaje.style.color = "#0b7285";

  formulario.reset();
});

const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    enlaces.forEach(function (item) {
      item.classList.remove("activo");
    });

    enlace.classList.add("activo");
  });
});