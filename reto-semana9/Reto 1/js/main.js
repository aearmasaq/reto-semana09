
const  TextUser = prompt("Ingrese numero a cifrar: ");
const desplazamiento = Number(prompt ("Ingrese numero a desplazar: "));



function encrypt() {
	let salidaencrip = '';
	let oldASCII;
	let newASCII; 
	for (var c = 0; c < TextUser.length; c++) {
		oldASCII = TextUser[c].charCodeAt(); 
		newASCII = oldASCII + desplazamiento; 
		salidaencrip = salidaencrip.concat(String.fromCharCode(newASCII)); 
	}
	return salidaencrip;
}

function descrypt(){
  let textDesc = encrypt();
  let x = desplazamiento;
  let  numDes = (x)*(-1); 
    let salidadescri = '';
	let oldASCII;
	let newASCII; 
	for (var c = 0; c < textDesc.length; c++) {
		oldASCII = textDesc[c].charCodeAt(); 
		newASCII = oldASCII + numDes; 
		salidadescri = salidadescri.concat(String.fromCharCode(newASCII)); 
	}
	return salidadescri;
}

///cifrando texto

console.log(`El texto cifrado de ${TextUser} es: ` + encrypt());


//descifrando texto ingresado

 console.log(`El texto descifradp de ${TextUser} es: ` + descrypt());
  
