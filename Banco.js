function BANCO1 (nombreBanco,ubicacion,telefono,correo){
    this.nombre=nombreBanco;
    this.ubicacion=ubicacion;
    this.telefono=telefono;
    this.correo=correo;
}

const bank = new BANCO1("Banco Snake","Temascalapa","5523241564","bancosnake@gmail.com");
console.log(bank);
