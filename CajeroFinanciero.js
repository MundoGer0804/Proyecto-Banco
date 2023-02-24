class CajeroFinanciero extends Persona{
    #NumeroEmpleado;
    HorarioCajero;
    #Sueldo;

    #MakeId= function(){
        let name =  this.Nombre;
        return  name.charAt(0) + Math.floor(Math.random() * 1000);

    }

    /**
     * @param {horario} HorarioCajero
     */
    CheckSchedule=function(){
        this.HorarioCajero=schedule;
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
}