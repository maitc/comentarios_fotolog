/*aquí va tu código*/
//se llama botón.
function inicial(){
	var boton = document.getElementById("btn");
	boton.addEventListener("click", guardarDatos);//se llama funcion que reune mis value y donde esta localstorage
	//se llama funcion que trae el for.
	mostrarDatos();
}
inicial();

function guardarDatos(){
	var clav = document.getElementById("clave").value;
	var valo = document.getElementById("valor").value;

	localStorage.setItem(clav, valo);
	mostrarDatos();//Para mostrar datos en pantalla, debe estar señalado aca la fx del for.

}
function mostrarDatos(){

	//se llama div contenedor.
	var divContenedor = document.getElementById("ale");
	divContenedor.innerHTML = "";
	for(var i = 0; i < localStorage.length; i++){
		var nombre = localStorage.key(i);
		var valor = localStorage.getItem(nombre);

		//DOM
		//se crea div para crear cuadro
		var divHijo = document.createElement("div");
		divHijo.setAttribute("id", "alee");
		// se crea el h5 para el nombre y p comentario.
		var parrafo = document.createElement("h5");
		parrafo.classList.add("titulo-comentario");
		var parradoDos = document.createElement("p");
		parradoDos.classList.add("comentario");
		//se crean textos que para que se imprima
		var textClave = document.createTextNode("#" + (i + 1) + " " + nombre + ":");
		var textValor = document.createTextNode(valor);

		parrafo.appendChild(textClave);
		parradoDos.appendChild(textValor);

		divHijo.appendChild(parrafo);
		divHijo.appendChild(parradoDos);

		divContenedor.appendChild(divHijo);
	}
}

var botonLimpiar = document.getElementById("btn-dos");
botonLimpiar.addEventListener("click", limpiar);

function limpiar(){//limpia con boton
	var divContenedor = document.getElementById("ale");
	divContenedor.innerHTML = "";
}
function limpiarDatos(){//limpia en aplication
	localStorage.clear();
	mostrarDatos();
}	
