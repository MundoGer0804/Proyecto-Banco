var cuentas = [];

function guardarDatos(nombre, apellido, email, telefono, contrasenia) {
  let cuenta = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    telefono: telefono,
    contrasenia: contrasenia
  };

  if (localStorage.getItem("cuentas") !== null) {
    cuentas = JSON.parse(localStorage.getItem("cuentas"));
  }

  cuentas.push(cuenta);

  localStorage.setItem("cuentas", JSON.stringify(cuentas));

  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("contrasenia").value = "";

  alert("Cuenta registrada correctamente");
}
