function login(){
    document.getElementById("drop-content").style.display = "block"
}
function info_login(nombre){
    nombre = document.getElementById("nombre_usuario").value;
    correo = document.getElementById("correo_usuario").value;
    document.getElementById("boton").innerHTML = nombre
}