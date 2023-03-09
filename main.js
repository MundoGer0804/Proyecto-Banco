
/**let data = {};
function registrar(e){
  
    data.nombre=document.getElementById('name').value;
    data.apellido=document.getElementById('lastename').value;
    data.email=document.getElementById('email').value;
    data.telefono=document.getElementById('Tel').value;
    data.contrasenia=document.getElementById('password').value;
    return data
}**/
var cuentas = [];
function crearCuenta(e){
    e.preventDefault();

    let name =  document.getElementById('name');
    let surname =  document.getElementById('lastename');
    let email =  document.getElementById('email');
    let telefono =  document.getElementById('Tel');
    let contra =  document.getElementById('password');
    
    
    let e1 = new CuentaB (name.value, surname.value, email.value, telefono.value,contra.value);
    console.log(e1);

    cuentas.push(e1);

    localStorage.setItem("CuentaB", JSON.stringify(cuentas));
         alert("Se guardo el usuario");
    document.getElementById('name').value = '';
    document.getElementById('lastename').value = '';
    document.getElementById('email').value = '';
    document.getElementById('Tel').value = '';
    document.getElementById('password').value = '';
}
    
function Operacione() {
  window.location.href = "https://www.ejemplo.com/enlace2";
}

function logiUser(){
  var email1 = document.getElementById('email1');
  let telefono1 = document.getElementById('telefono1');
  let contrasenia1 = document.getElementById('contrasenia1');


  let user1 = new User(email1.value, telefono1.value, contrasenia1.value);

  let login = user1.login(users)
  login != true ? alert(login) : window.location.href ="hok.html";
}
const saldoDisponible = document.getElementById("saldoDisponible")

let balance = 0; // Variable que contiene el saldo disponible

saldoDisponible.innerHTML =`<h2>${balance}</h2>`;

//Funcion de saldo//
function addBalance() {
  let amount = parseFloat(prompt("Ingrese la cantidad de saldo a agregar:"));
  if (isNaN(amount) || amount <= 0) {
    alert("Ingrese una cantidad válida");
    return;
  }
  balance += amount; // Sumamos la cantidad proporcionada al saldo disponible
  saldoDisponible.innerHTML =`<h2>${balance}</h2>`; // Actualizamos el elemento HTML con el nuevo saldo disponible
  alert(`Transferencia exitosa. Saldo actual: ${balance}`);
}

function withdrawBalance() {
  let amount = parseFloat(prompt("Ingrese la cantidad de saldo a retirar:"));
  if (isNaN(amount) || amount <= 0) {
    alert("Ingrese una cantidad válida");
    return;
  }
  if (balance >= amount) { // Comprobamos si hay suficiente saldo para el retiro
    balance -= amount; // Restamos el monto del retiro al saldo disponible
    saldoDisponible.innerHTML =`<h2>${balance}</h2>`; // Actualizamos el elemento HTML con el nuevo saldo disponible
    alert(`Retiro exitoso. Saldo actual: ${balance}`);
  } else {
    alert("Fondos insuficientes");
  }
}

function paySubsidiary(){
  let subsidiary = prompt("¿En qué sucursal desea realizar el pago?");
  let confirmPayment = confirm(`¿Desea realizar el pago en la sucursal ${subsidiary}?`);
  if (confirmPayment) {
    let amount = parseFloat(prompt("Ingrese la cantidad a pagar:"));
    if (isNaN(amount) || amount <= 0) {
      alert("Ingrese una cantidad válida");
      return;
    }
    if (balance >= amount) { // Comprobamos si hay suficiente saldo para el pago
      balance -= amount; // Restamos el monto del pago al saldo disponible
      saldoDisponible.innerHTML =`<h2>${balance}</h2>`; // Actualizamos el elemento HTML con el nuevo saldo disponible
      alert(`Pago exitoso. Saldo actual: ${balance}`);
    } else {
      alert("Fondos insuficientes");
    }
  }
}

//Funcion de salario//
CheckSalaryWeek=function(salary){
  let horasTrabajadas;
  let salarioPorHora;
  let sueldoSemanal;

  horasTrabajadas = prompt("Introduce las horas trabajadas en la semana:");
  salarioPorHora = prompt("Introduce el salario por hora:");

  sueldoSemanal = horasTrabajadas * salarioPorHora;

  alert("El sueldo semanal del empleado es de: " + sueldoSemanal + " pesos.");

}

//Funcion tabla de empleados
let tablaEmpleados = document.getElementById("tablaEmpleados");
		let formularioEmpleado = document.getElementById("formularioEmpleado");

		formularioEmpleado.addEventListener("submit", function(event) {
			event.preventDefault();

			let noEmpleado = document.getElementById("noEmpleado").value;
			let nombreEmpleado = document.getElementById("nombreEmpleado").value;
			let horarioEmpleado = document.getElementById("horarioEmpleado").value;
			let sueldoEmpleado = document.getElementById("sueldoEmpleado").value;

			let empleado = {
				noEmpleado: noEmpleado,
				nombreEmpleado: nombreEmpleado,
				horarioEmpleado: horarioEmpleado,
				sueldoEmpleado: sueldoEmpleado
			};

			agregarEmpleado(empleado);

			formularioEmpleado.reset();

			cargarEmpleados();
		});

    //Funcion para agregar empleados
		function agregarEmpleado(empleado) {
			let empleados = obtenerEmpleados();

			empleados.push(empleado);

			localStorage.setItem("empleados", JSON.stringify(empleados));
		}

		function obtenerEmpleados() {
			let empleados;

			if(localStorage.getItem("empleados") === null) {
				empleados = [];
			} else {
				empleados = JSON.parse(localStorage.getItem("empleados"));
			}

			return empleados;
		}

    //Función para cargar los datos de los empleados
		function cargarEmpleados() {
			let empleados = obtenerEmpleados();

			tablaEmpleados.innerHTML = "";

			empleados.forEach(function(empleado) {
				let fila = tablaEmpleados.insertRow();

				let celdaNoEmpleado = fila.insertCell();
				celdaNoEmpleado.appendChild(document.createTextNode(empleado.noEmpleado));

				let celdaNombreEmpleado = fila.insertCell();
				celdaNombreEmpleado.appendChild(document.createTextNode(empleado.nombreEmpleado));

				let celdaHorarioEmpleado = fila.insertCell();
				celdaHorarioEmpleado.appendChild(document.createTextNode(empleado.horarioEmpleado));

				let celdaSueldoEmpleado = fila.insertCell();
				celdaSueldoEmpleado.appendChild(document.createTextNode(empleado.sueldoEmpleado));
			});
		}

		//Funcion para borrar datos
		function borrarTabla() {
      let filas = tablaEmpleados.rows.length;
      let confirmDelete = confirm(`¿Está seguro que desea eliminar todos los datos?`);
      if (confirmDelete) {
          for (let i = filas - 1; i > 0; i--) {
              tablaEmpleados.deleteRow(i);
          }
      }
  }
  