const form = document.getElementById("formulario");

// Expresión regular: usuario alfanumérico (puede incluir . _ -) + @ + dominio con extensión
const REGEX_EMAIL = /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+(\.[A-Za-z]{2,})+$/;
// Contraseña alfanumérica: debe tener al menos una letra y un número
const REGEX_ALFANUMERICA = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]+$/;

// Muestra u oculta el error de un campo
function mostrarError(id, mensaje) {
  const input = document.getElementById(id);
  document.getElementById("error-" + id).textContent = mensaje;
  if (input) {
    input.classList.toggle("invalido", mensaje !== "");
    input.classList.toggle("valido", mensaje === "");
  }
  return mensaje === "";
}

// ----- Validaciones individuales -----
function validarTexto(id, etiqueta) {
  const valor = document.getElementById(id).value.trim();
  if (valor === "") return mostrarError(id, etiqueta + " es obligatorio.");
  if (valor.length < 6) return mostrarError(id, etiqueta + " debe tener mínimo 6 caracteres.");
  if (valor.length > 15) return mostrarError(id, etiqueta + " debe tener máximo 15 caracteres.");
  return mostrarError(id, "");
}

function validarEdad() {
  const valor = document.getElementById("edad").value.trim();
  if (valor === "") return mostrarError("edad", "La edad es obligatoria.");
  const edad = Number(valor);
  if (!Number.isInteger(edad)) return mostrarError("edad", "La edad debe ser un número entero.");
  if (edad < 18 || edad > 50) return mostrarError("edad", "La edad debe estar entre 18 y 50.");
  return mostrarError("edad", "");
}

function validarEmail() {
  const valor = document.getElementById("email").value.trim();
  if (valor === "") return mostrarError("email", "El correo es obligatorio.");
  if (!REGEX_EMAIL.test(valor)) return mostrarError("email", "Ingresa un correo válido con dominio (ej: usuario@correo.com).");
  return mostrarError("email", "");
}

function validarSexo() {
  const elegido = document.querySelector('input[name="sexo"]:checked');
  document.getElementById("error-sexo").textContent = elegido ? "" : "Selecciona una opción.";
  return !!elegido;
}

function validarPassword() {
  const valor = document.getElementById("password").value;
  if (valor === "") return mostrarError("password", "La contraseña es obligatoria.");
  if (valor.length < 10) return mostrarError("password", "La contraseña debe tener mínimo 10 caracteres.");
  if (!REGEX_ALFANUMERICA.test(valor)) return mostrarError("password", "Debe ser alfanumérica: solo letras y números, con al menos uno de cada.");
  return mostrarError("password", "");
}

function validarConfirmar() {
  const confirmar = document.getElementById("confirmar").value;
  const password = document.getElementById("password").value;
  if (confirmar === "") return mostrarError("confirmar", "Debes confirmar la contraseña.");
  if (confirmar !== password) return mostrarError("confirmar", "Las contraseñas no coinciden.");
  return mostrarError("confirmar", "");
}

// ----- Validación en tiempo real -----
document.getElementById("nombre").addEventListener("input", () => validarTexto("nombre", "El nombre"));
document.getElementById("apellido").addEventListener("input", () => validarTexto("apellido", "El apellido"));
document.getElementById("edad").addEventListener("input", validarEdad);
document.getElementById("email").addEventListener("input", validarEmail);
document.querySelectorAll('input[name="sexo"]').forEach(r => r.addEventListener("change", validarSexo));
document.getElementById("password").addEventListener("input", () => {
  validarPassword();
  if (document.getElementById("confirmar").value !== "") validarConfirmar();
});
document.getElementById("confirmar").addEventListener("input", validarConfirmar);

// ----- Envío del formulario -----
form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  // Se ejecutan todas (sin cortar) para mostrar todos los errores a la vez
  const resultados = [
    validarTexto("nombre", "El nombre"),
    validarTexto("apellido", "El apellido"),
    validarEdad(),
    validarEmail(),
    validarSexo(),
    validarPassword(),
    validarConfirmar()
  ];

  if (resultados.every(Boolean)) {
    document.getElementById("alerta").classList.add("visible");
    document.getElementById("btn-aceptar").focus();
  }
});

// Cerrar la alerta y limpiar el formulario
document.getElementById("btn-aceptar").addEventListener("click", function () {
  document.getElementById("alerta").classList.remove("visible");
  form.reset();
  form.querySelectorAll("input").forEach(i => i.classList.remove("valido", "invalido"));
});
