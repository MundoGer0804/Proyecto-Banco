class CajeroFinanciero extends Persona{
    NumeroEmpleado;
    HorarioCajero;
    Sueldo;

    MakeId= function(){
        let name =  this.Nombre;
        return  name.charAt(0) + Math.floor(Math.random() * 1000);

    }

    /**
     * @param {horario} HorarioCajero
     */
    CheckSchedule=function(){
        this.HorarioCajero=schedule;
    }

    
}