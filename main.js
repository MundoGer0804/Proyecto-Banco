function registrar(){
  let data = {};
    data.nombre=document.getElementById('name').value;
    data.apellido=document.getElementById('lastename').value;
    data.email=document.getElementById('email').value;
    data.telefono=document.getElementById('Tel').value;
    data.contrasenia=document.getElementById('password').value;
}
    
function logiUser(){
  var email1 = document.getElementById('email');
  let telefono1 = document.getElementById('telefono');
  let contrasenia1 = document.getElementById('contrasenia');


  let user1 = new User(email1.value, telefono1.value, contrasenia1.value);

  let login = user1.login(users)
  login != true ? alert(login) : window.location.href ="hok.html";
}



CheckSalaryWeek=function(salary){
  let horasTrabajadas;
  let salarioPorHora;
  let sueldoSemanal;

  horasTrabajadas = prompt("Introduce las horas trabajadas en la semana:");
  salarioPorHora = prompt("Introduce el salario por hora:");

  sueldoSemanal = horasTrabajadas * salarioPorHora;

  console.log("El sueldo semanal del empleado es de: " + sueldoSemanal + " pesos.");

}