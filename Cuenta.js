class Cajero extends Persona{
    Correo_Resp;
    Contrasena;

    constructor(email2, password){
       super(Nombre,Apellidos,FechaNac,Telefono,Email,Domicilio,Rfc,ClaveElect);
        this.Correo_Resp = email2;
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

    
