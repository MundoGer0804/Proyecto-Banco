
/*function guardarDatos(nombre, apellido, email, telefono, contrasenia) {
  let cuenta = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    telefono: telefono,
    contrasenia: contrasenia
  };

  var cuentas = [];
  
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
}*/

class Tool {
  /**
   * 
   * @param {string} cadena 
   * @returns {string}
   */
  static strToSlug (cadena){
      return encodeURIComponent(cadena).replace(/%20/g, '-');
  }
  
  static setDataToLocalStorage(parameter, data){
  localStorage.setItem(parameter, JSON.stringify(data));
}
/**
* 
* @param {string} parameter 
* @returns {Array}
*/
static getDatFromLocalStorage(parameter){
  return JSON.parse( localStorage.getItem(parameter));
}
}


