//RETO 02

let montApos= prompt("Ingrese monto a apostar *minimo debe ser S/5:");
let numDado = prompt("Ingrese el numero de apuesta del dado entre 1 y 6");
let premAcuml = 0;
let acumjuego = 0;

let x=1;
let y=0;
function lanzarDado(){
    let die1 = document.getElementById("die1");
     let d1 = Math.floor(Math.random() * 6) + 1;
    let pos =d1 + y;
    die1.innerHTML = d1; 
    x = x+1;
    y = pos;

    if (premAcuml < 200 ){
       if (premAcuml <= 0 )
         alert("El juego ha terminado usted no tiene dinero");
         if (d1 === numDado) {
            acumjuego = montApos * 2;
            premAcuml =  premAcuml + acumjuego;
            alert("Usted gano el doble que aposto");
        } 
        else if (premAcuml <= 0){
                alert("Usted perdio todo el dinero apostado");
        }
        else
        {    
            premAcuml = premAcum - montApos;
            alert("Perdio lo que aposto");
        }   
    }  
    else{
        alert ("Usted e nuestro maximo ganador");
    }   
}



