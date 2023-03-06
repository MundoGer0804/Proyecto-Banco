<<<<<<< HEAD
class Cajero {
    correo;
    Correo_Resp;
    Telefono;
    #Contrasena;
 Persona

    constructor(email, email2, phone, password){
        this.correo = email;
        this.Correo_Resp = email2;
        this.Telefono = phone;
        this.#Contrasena = password;
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
            this.#Contrasena = Contrasena;
    }

    actualizarCorreos_Resp = function(Correo_Resp){
        this. Correo_Resp = Correo_Resp;
    }


    
}

    
=======
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

    
>>>>>>> e98ca175cc890a419a125494ff6e3b6337f6dc57
