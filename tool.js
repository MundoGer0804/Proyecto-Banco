function GuardarLocal(datos,param){
    localStorage.setItem(datos, JSON.stringify(param));

}

function SacarLocal(datos){
    localStorage.getItem(datos);
}
