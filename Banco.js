class Banco{
    nombreBanco;
    ubicacion;
    telefono;
    paginaWeb;
    correo;
    constructor(namebank,adress,rfc){
        this.nombreBanco=namebank;
        this.ubicacion=adress;
    }
    
UpdatePhoneNumber=function(phone){
    this.telefono = phone;
}

/**
 * @param {string} correo
 */
CheckEmail=function(){
    this.correo = email;
}

/**
 * @param {string} ubicacion
 */
CheckLocation=function(){
    this.ubicacion=location;
}
}
