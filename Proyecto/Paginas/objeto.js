function objeto(){
	nom=document.getElementById("nombre").value;
	ema=document.getElementById("email").value;
	com=document.getElementById("comentario").value;
	
	obje={
		Nombre:nom,
		Email:ema,
		Comentario:com
		};
	
	console.log(obje);
}