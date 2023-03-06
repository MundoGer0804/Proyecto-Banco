function registrar(){
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
    
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("contrasenia").value = "";
    
    alert("Cuenta registrada correctamente");
  }

  
function ingresar(){
  var  users = Helper.getUsersFromLocalStorage();

function logiUser(){
    let email = document.getElementById('email');
    let telefono = document.getElementById('telefono');
    let contrasenia = document.getElementById('contrasenia');


    let user1 = new User(email.value, telefono.value, contrasenia.value);

    let login = user1.login(users)
    login != true ? alert(login) : window.location.href ="hok.html";

    
}


}