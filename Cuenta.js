class Cajero extends Persona {
    correo;
    Correo_Resp;
    Telefono;
    Contrasena;


    constructor(email, email2, phone, password){
        this.correo = email;
        this.Correo_Resp = email2;
        this.Telefono = phone;
        this.Contrasena = password;
    }



    /**
     * @param {string} correo
     */
    CheckEmail=function(){
        this.correo = email;
    }

    actualizarTelefono = function(Telefono){
            this.Telefono = Telefono;

    }
    actualizarContrasena = function(Contrasena){
            this.Contrasena = Contrasena;
    }

    actualizarCorreos_Resp = function(Correo_Resp){
        this. Correo_Resp = Correo_Resp;
    }


    
}

    
