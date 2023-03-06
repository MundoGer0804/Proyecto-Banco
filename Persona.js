class Persona {
    Nombre;
    Apellidos;
    FechaNac;
    Telefono;
    Email;
    Docmicilio;
    Curp;
    Rfc;
    ClaveElect;

    constructor(name,lastename,date,dom,rfc,clave,Tel,email){
        this.Nombre = name;
        this.Apellidos = lastename
        this.FechaNac = date;
        this.Telefono = Tel;
        this.Email = email;
        this.Domicilio = dom;
        this.Rfc = rfc;
        this.ClaveElect = clave;

    }
       /**
        * @param {string} Curp
        * @returns {string}
        */
    getCurp = function(){
        return (this.Curp) ;
    }

    /**
     * 
     * @param {int} Phone 
     */
    ActualizarTelefono = function(Phone){
        this.Telefono = Telefono;

    }
    
    /**
     * 
     * @param {string} INE 
     */
    getClaveElect = function(){
        return (this.ClaveElect);
    }

    /**
     * 
     * @param {string} Adress 
     */
    ActualizarDomicilio = function(Adress){
        this.Domicilio = Adress
    }

    /**
     * @param {int}
     * @return {int}
     */
    CalcularEdad = function (){
        let Fecha_actual = new Date ();
        let Fecha_nacimiento = new Date(this.FechaNac);
        let Edad = Fecha_actual.getFullYear() - Fecha_nacimiento.getFullYear();
        let mes = Fecha_actual.getMonth() - Fecha_nacimiento.getMonth();
        if (mes < 0 (mes === 0 && Fecha_actual.geDate()< Fecha_nacimiento.geDate())){
            Edad--;
        }
    }


}