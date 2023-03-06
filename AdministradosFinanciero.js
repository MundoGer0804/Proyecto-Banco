class AdministradorFinanciero {
    Sueldo;
    Presupuesto;
    Transaccion;
    cuenta;
    Proveedor;
    HorarioAd;
    efectivo;

    
    constructor(salary, budget, transaction, account, supplier, HoursAd) {
      this.Sueldo = salary;
      this.Presupuesto = budget;
      this.Transaccion = transaction;
      this.cuenta = account;
      this.Proveedor = supplier;
      this.HorarioAd = HoursAd;
    
      this.GestionarEfectivo();
      this.GestionarInversiones();
      this.CalcularSueldoSemanal();
    }
    
    GestionarEfectivo() {
      // codigo para gestionar efectivo
     // Pedir al usuario el monto de dinero ingresado
const Ingrese = prompt("Ingrese la cantidad de dinero que recibio esta semana:");


    }

    
    CalcularSueldoSemanal() {
      // codigo para calcular el sueldo semanal
      // Pedir al usuario el monto de dinero ingresado
const gastos = [];
// Calcular el total de gastos de la semana
const totalGastos = gastos.reduce((total, gasto) => total + gasto);
// Calcular el dinero disponible despues de los gastos
const dineroDisponible = ingreso - totalGastos;
// Mostrar los resultados al usuario
console.log(`Esta semana usted gasto ${totalGastos} y le quedo ${dineroDisponible} disponible.`);

      
    }
  }
  