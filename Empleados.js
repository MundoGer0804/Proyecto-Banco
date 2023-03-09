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
