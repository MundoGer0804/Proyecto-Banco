function GuardarLocal(cuenta,cuentas){
    localStorage.setItem(cuenta, JSON.stringify(cuentas));
}

function SacarLocal(datos){
    localStorage.getItem(datos);
}
