function palindromo (){
	var datoIngreso = prompt("Ingrese su frase, sin acentos:");
	var h2 = document.querySelector("#valPal");
	var pal = datoIngreso.toLowerCase();
	var palInverso="";
	var pal1="";
	for(var count = 0;count<pal.length;count++){ // .replace()
		if(pal[count] === " "|| pal[count] === "¿"|| pal[count] === "?" || pal[count]===","){
			pal1 = pal1 + "";
		} else {
			pal1 = pal1 + pal[count];
		}
	}
	for(var i= pal1.length-1;i>=0;i--){  // .split(), reverse() y join ()
		palInverso = palInverso + pal1[i];
	}
	if (pal1 === palInverso){
		h2.innerHTML = "Excelente, ingresaste un palindromo: " + datoIngreso + " = "+ palInverso;
	} else {
		h2.innerHTML = "¡Intentalo de nuevo!, la frase es incorrecta: "+ datoIngreso + " = "+ palInverso;
	}
}

function piramide (){
	var tpi = parseInt(prompt("El tamaño de su piramide es:"));
	var div = document.querySelector('.piramide-div');
	var piramide = "";	
	var ladrillo = " *";
	for(var i=1;i<=tpi;i++){
		piramide = piramide +ladrillo;
		console.log(piramide);
	    var pre = document.createElement('pre');
	    div.appendChild(pre);
	    pre.innerHTML = piramide;
	}
}
function estatus (){
	var nivel = parseInt(prompt(" Ingresa tu nivel:"));
	var h2 = document.querySelector("#estatus"); //busca en  tu html h2
	var img = document.querySelector("img");
	if(nivel>0 && nivel<10){
		h2.innerHTML = "Estatus: Aprendiz";
		document.getElementById("changeImg").src="assets/img/imgEstatusJugador/aprendiz.jpg";
	} else if(nivel >= 10 && nivel <20){
		h2.innerHTML = "Estatus: Acrobata";
		document.getElementById("changeImg").src="assets/img/imgEstatusJugador/acrobata.jpg";
	} else if (nivel>= 20){
		h2.innerHTML = "Estatus: Ninja";
		document.getElementById("changeImg").src="assets/img/imgEstatusJugador/ninja.jpg";
	} else {
		h2.innerHTML = "Sigue entrenando para subir de nivel";
		document.getElementById("changeImg").src="assets/img/imgEstatusJugador/lol.gif";
	}
}

function fibo (){
	var n = parseInt(prompt("Qué número quieres conocer:"));
	var h3 = document.querySelector("#numFibo");
	var x=0;
	var y=1;
	var sfp=0;
	var i=0;
	/*while(i<=n){
		//console.log(sfp);
		h3.innerHTML = "El número es: " + sfp;
		sfp =x+y;
		x = sfp;
		y = sfp-y;
		i++;
	}*/
	for(var i =0; i<=n; i++){
	h3.innerHTML = "El número es: " + sfp;
		sfp =x+y;
		x = sfp;
		y = sfp-y;
	}
}