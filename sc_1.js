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






















/*var dat1 = prompt("Sumando:"), dat2 = prompt("Sumando:");

dat1 = parseInt(dat1);
dat2 = parseInt(dat2);

//ej 1
var sum = dat1 +dat2;

document.write("Suma: " + sum + "<br>");

//ej 2
if(dat1 > dat2){
	document.write("Mayor: " + dat1 + "<br>");
}else{
	document.write("Mayor: " + dat2 + "<br>");
}

//ej 3
var div1 = dat1/2, div2 = dat1/4, div3 = dat1/8;

document.write("Division entre 2 del primer numero: " + div1 + "<br>");
document.write("Division entre 4 del primer numero: " + div2 + "<br>");
document.write("Division entre 8 del primer numero: " + div3 + "<br>");

//ej 4
var peticion = prompt('Introduce un número adicional:');

var par = parseInt(peticion,10);

if( par % 2 == 0 ){
	document.getElementById('edit').innerHTML = "El último número introducido es par.";
}else{
	document.getElementById('edit').innerHTML = "El último número introducido es impar";
}

//contador regresivo desde fecha
document.addEventListener('DOMContentLoaded', () => { 

        //===
        // VARIABLES
        //===
        const DATE_TARGET = new Date('04/13/2021 0:01 AM');
        // DOM for render
        const SPAN_DAYS = document.querySelector('span#days');
        const SPAN_HOURS = document.querySelector('span#hours');
        const SPAN_MINUTES = document.querySelector('span#minutes');
        const SPAN_SECONDS = document.querySelector('span#seconds');
        // Milliseconds for the calculations
        const MILLISECONDS_OF_A_SECOND = 1000;
        const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
        const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
        const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

        //===
        // FUNCTIONS
        //===

        /**
        * Method that updates the countdown and the sample
        *//*
        function updateCountdown() {
            // Calcs
            const NOW = new Date()
            const DURATION = DATE_TARGET - NOW;
            const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
            const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
            const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
            const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
            // Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)

            // Render
            SPAN_DAYS.textContent = REMAINING_DAYS;
            SPAN_HOURS.textContent = REMAINING_HOURS;
            SPAN_MINUTES.textContent = REMAINING_MINUTES;
            SPAN_SECONDS.textContent = REMAINING_SECONDS;
        }

        //===
        // INIT
        //===
        updateCountdown();
        // Refresh every second
        setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
    });


document.getElementById('edit').textContent( () => {
	let test = 20;
	setTimeout(()=>{
		test -= 1;
	}, 1000);

});
*/

/*

function descendingOrder(n){
  //...
  if(n > 0){
    var arrayNum = n.toString().split("");
    if(arrayNum.length == 1){
      return parseInt(arrayNum.map(Number).join());
    }

    var realNumber = arrayNum.map(Number);
    realNumber.sort();
    var result = realNumber.reverse().join("");
    return result; 
  }else{
    return 0;
  }
}*/
/*
console.log(disemvowel("hola quote"));

function disemvowel(str) {
  return str.replace(/[aeiou]/g, "");
}*/
//0+1 +2 +3 +4 +5 +6 +7
/*var ar = getSum(0,7);
console.log(ar);

function getSum( a,b )
{
    if(a !== b){
      
      var array = [ a, b ];
      array.sort();

      if(a - b !== 1){
      	for (let j = 1; j <= (array[array.length-1] - 1); j++ ){

      		array[0] = array[0] + j;
      		console.log(array[0]);
      	}
      }

      var finalSum = array[0] + array[1]; 
      return finalSum;
      
      
      
    }else {
      return a;
    }

}*/
/*
let count = 0;

function cc(card) {
  // Only change code below this line

  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  if(count > 0){
    var answer = " Bet";
  }else{
    var answer = " Hold"
  }
  return count + answer;

  
  // Only change code above this line
}
document.querySelector('#edit').textContent=cc(2);
document.querySelector('#edit').textContent=cc(3);
document.querySelector('#edit').textContent=cc(4);
document.querySelector('#edit').textContent=cc(5);
document.querySelector('#edit').textContent=cc(6);*/
//cc(2); cc(3); cc(7); cc('K'); cc('A');

//console.log(3>2 ? "r":"f");


// Setup
/*
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  switch (prop){
    case "tracks":
      if(value !== ""){
        records[id][prop].push(value);

      }else{
        delete records[id][prop];
      }
      break;
    
    case "albumTitle":
    case "artist":
      if(value !== ""){
        records[id][prop] = value;
      }else{
        delete records[id][prop];
      }
      break;
  }
  
  
  return records;
}

console.log(recordCollection);

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
updateRecords(recordCollection, 5439, 'tracks', 'Take a chance on me');
updateRecords(recordCollection, 2548, 'artist', '');
updateRecords(recordCollection, 1245, 'tracks', 'Addicted to love');
updateRecords(recordCollection, 2468, 'tracks', 'Free');
updateRecords(recordCollection, 1245, 'albumTitle', 'Riptide');

console.log(recordCollection);*/

// Setup
/*
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for(let i = 0; i < contacts.length; i++){
      if(contacts[i].firstName === name){

        if(contacts[i].hasOwnProperty(prop)){
          return contacts[i][prop];
        }else{
          return "No such property";
        }

      }
      return "No such contact";
  }

  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  // Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));
*/