const inputs = document.querySelectorAll(".contact-input");
const toggleBtn = document.querySelector(".theme-toggle");
const allElements = document.querySelectorAll("*");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  allElements.forEach((el) => {
    el.classList.add("transition");
    setTimeout(() => {
      el.classList.remove("transition");
    }, 1000);
  });
});

inputs.forEach((ipt) => {
  ipt.addEventListener("focus", () => {
    ipt.parentNode.classList.add("focus");
    ipt.parentNode.classList.add("not-empty");
  });
  ipt.addEventListener("blur", () => {
    if (ipt.value == "") {
      ipt.parentNode.classList.remove("not-empty");
    }
    ipt.parentNode.classList.remove("focus");
  });
});

function enviarFormulario(event) {
  event.preventDefault(); // Evita el envío automático del formulario

  // ... Código para validar los campos ...

  if (nombre && telefono && correo && servicio && mensaje && solicitarCredito) {
    // Envía el formulario (puedes agregar aquí tu lógica para enviarlo al servidor si es necesario)

    // Muestra la notificación de éxito
    Toastify({
      text: "Solicitud enviada correctamente",
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      duration: 5000,
      close: true,
      gravity: "top",
      position: "center",
      offset: { x: 0, y: 70 },
    }).showToast();

    // Limpia los campos o realiza otras acciones necesarias
    document.querySelector(".contact-form").reset();
  } else {
    // Muestra una alerta si algún campo está vacío
    alert("Por favor, complete todos los campos.");
  }
}
// Configuración del carrusel
var currentIndex = 0;
var interval = 5000; // Cambia de imagen cada 5 segundos

var images = document.querySelectorAll('.img');
setInterval(function() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}, interval);

