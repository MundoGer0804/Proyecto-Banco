
/**let data = {};
function registrar(e){
  
    data.nombre=document.getElementById('name').value;
    data.apellido=document.getElementById('lastename').value;
    data.email=document.getElementById('email').value;
    data.telefono=document.getElementById('Tel').value;
    data.contrasenia=document.getElementById('password').value;
    return data
}**/
var empleados = [];
function crearEmpleado(e){
    e.preventDefault();

    let name =  document.getElementById('name');
    let surname =  document.getElementById('lastename');
    let email =  document.getElementById('email');
    let telefono =  document.getElementById('Tel');
    let contra =  document.getElementById('password');
    
    
    let e1 = new Empleado (name.value, surname.value, email.value, telefono.value,contra.value);
    console.log(e1);

    empleados.push(e1);

    localStorage.setItem("Empleado", JSON.stringify(empleados));
         alert("Se guardo el empleado");
    document.getElementById('name').value = '';
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