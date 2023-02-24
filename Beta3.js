function registrar() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var contrasenia = document.getElementById("contrasenia").value;
    
    var cuenta = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      telefono: telefono,
      contrasenia: contrasenia
    };
    
    if (localStorage.getItem("cuentas") === null) {
      var cuentas = [];
    } 
    else {
      var cuentas = JSON.parse(localStorage.getItem("cuentas"));
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