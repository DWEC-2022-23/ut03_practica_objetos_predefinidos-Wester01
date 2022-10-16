/*


La página html se utilizará para obtener los datos y se mostrarán los resultados mediante un alert.

   1 Caja de texto de tipo fecha o promt que al pulsar el botón "reyes magos" llame a la función reyesMagos(Fecha) 
     que nos devuelve cuántos días quedan para que vengan los Reyes Magos y lo muestre por pantalla 
   
   2 Botón que al pusar muestre en un alert la fecha y hora actuales de la siguiente formaFecha:
    Hoy es martes, 22 de septiembre de 2020 y son las 12:34 horas
   
   3 Caja de texto de tipo número o promt que nos solicita un radio. Este llamará a la función calcularAreaCirculo(radio) 
     que devuelve el área.  Mostrar en un alert el área de un círculo y la longitud de una circunferencia a partir del radio
     que introduzca el usuario. Debes mostrarlo con 2 decimales. Comprobar que introduce un número como radio.
    
   4 Mediante cajas de texto o un promt, al pulsar el botón "aleatorio" llame a la función calcularAleatorio(comienzo,fin) 
   	 que mostrará por pantalla un número aleatorio generado entre los dos números introducidos.
    
   5 Añadir una caja de texto y los siguientes botones que implementan las siguientes funcionalidades:
    Imprimir la primera mitad de los caracteres de la cadena de la caja de texto. mitadCar(cadena)
    Imprimir el último carácter de la caja de texto. ultimoCaracter(cadena)
    Imprimir la cadena en forma inversa de la caja de texto. cadenaInversa(cadena)
    Imprimir cada carácter del String de la caja de texto separado con un guión cadenaGuiones(cadena)
    Imprimir la cantidad de vocales almacenadas en la caja de texto. contarVocales(cadena)


*/

let caja = document.querySelector(".response");
let reyMago = document.querySelector("#boton");


reyMago.addEventListener('click', () => {

	var fecha = document.querySelector("#fecha");
	var today = new Date(fecha.value);
	var str = (today.getFullYear() + 1) + "-01-06";
	var futuro = new Date(str);
	var resto = today - futuro;

	caja.innerHTML = Math.floor(resto / (1000 * 60 * 60 * 24)) + " días restantes hasta la llegada de los Reyes Magos =)";

});


let alerta = document.querySelector("#alertButton");
alerta.addEventListener('click', () => {
	var hoy = new Date();
	alert("Hoy es " + hoy.getUTCDate() + " del mes " + hoy.getMonth() + " del año " + hoy.getFullYear() + ". Son las " + hoy.getHours() + " horas y " + hoy.getMinutes() + " minutos.");
});

//long 2 pi R
//area pi r^2
let radius = document.querySelector("#radio");

radius.addEventListener('input', () => {
	var reg = /\d/ ;
	if(!reg.test(radius.value)){
		alert("solo numeros");
		radius.value = "";
	}
});

let boton = document.querySelector("#calcular");
boton.addEventListener('click', () => {

		var area = Math.PI * Math.pow(radius.value, 2);
		var longitud = 2 * Math.PI * radius.value;
		alert("Area del circulo: " + area.toFixed(2) + " Longitud circunferencia: " + longitud.toFixed(2));

});

let minRange = document.querySelector("#minimo");
let maxRange = document.querySelector("#maximo");

let calcular = document.querySelector("#show");

calcular.addEventListener('click', () => {
	//console.log("MAX "+maxRange.value + " MIN "+minRange.value);
	var resultado = document.querySelector('.resultado');
	resultado.innerHTML = Math.floor(Math.random() * (maxRange.value - minRange.value +1) + minRange.value);
});

let textoResuelto = document.querySelector("#palabras");
let mitad = document.querySelector('#mitad');

mitad.addEventListener('click',() => {

	var text = document.querySelector("#texto");
	textoResuelto.innerHTML = text.value.split("",text.value.length/2).join().replace(",","");
});

let ultimo = document.querySelector("#ultimo");
ultimo.addEventListener('click',() =>{

	var text = document.querySelector("#texto");
	var char = text.value.split("");
	textoResuelto.innerHTML = char[char.length-1];

});

let inverso = document.querySelector("#inverso");
inverso.addEventListener('click',()=>{
	var text = document.querySelector("#texto");
	var sol = text.value.split("").reverse().join("");
	textoResuelto.innerHTML = sol;

});

let guion = document.querySelector("#guion");
guion.addEventListener('click',()=>{

	var text = document.querySelector("#texto");
	textoResuelto.innerHTML = text.value.split("").join("-");

});

let vocal = document.querySelector("#vocal");
vocal.addEventListener('click',()=>{

	var text = document.querySelector("#texto");
	var reg = /[aeiou]/g;
	textoResuelto.innerHTML = text.value.match(reg).length + " vocales en la palabra introducida";
});



function testNumbers(input){
	var reg = /\d/ ;
	if(!reg.test(input.value)){
		alert("solo numeros");
		input.value = "";
	}
}
