function login(){
    document.getElementById("drop-content").style.display = "block";
}
function info_login(){
    nombre = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;
    if (nombre == "Alex09"  && contraseña == "code123"){
        x = document.getElementById("boton1").value = "Alex09";
        document.getElementById("boton1").style.background = "grey";
        document.getElementById("boton1").style.padding = "5px";
        document.getElementById("drop-content").style.display = "none";
    }
    else{
        alert("Usuario o contraseña incorrecto");
    }
}
function atras(){
    document.getElementById("drop-content").style.display = "none";
}