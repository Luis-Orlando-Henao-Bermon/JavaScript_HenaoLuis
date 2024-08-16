console.log("Hola mundo");

num1=1;
num2=3.14;
//verificacion de tipo de dato
console.log(typeof(num1));
console.log(typeof(num2));

//operaciones
console.log((5*40)+(34/2));

//string
str1="hola "
str2="luis"
//concatenacion
console.log(str1+str2);

//boleanos

bol1=true;
bol2=false;
bol3=false;
bol3=true;


operadoresBandera=(bol1||   bol2) & (bol3||bol4);

console.log(operadoresBandera);

//-----------------------------------------------------------------------------
//===========Ejercicios============
const añoActual=2024;
//Funcion con parameto y sin retorno
function fechaNacimiento(año) {
    
    console.log("esta es tu año de nacimiento:",añoActual-año);
    
}

var edad=40;

fechaNacimiento(edad)


//Funcion con parametro y con retorno
function fahrenheit(celcius) {

    gradosFarenheit=32+(9*celcius/5)
    
    return gradosFarenheit
}

let gracosC= 38;

console.log(gracosC,"grados celsius son",fahrenheit(gracosC),"grados fahrenheit");

//Funcion con parametro y sin retorno
function descuento(llegada) {
    
    if (llegada<=50 & llegada>20) {
        console.log("Tienes 10% de descuento");
    }
    else if (llegada<=20) {
        console.log("Tienes 30% de descuento");
    }
    else{
        console.log("No tienes descuento");
    }
}

descuento(51)


//funcion sin parametro y sin retorno
function hola() {

    console.log("hola Mundo");
}

hola()


//funcion con parametro y sin retorno
function holaNombre(nombre) {

    console.log("hola "+nombre);

}

holaNombre("luis")

//funcion sin parametro y con retorno

function multiplicacion() {
    
    let result=3*10;

    return result
}

console.log(multiplicacion());

//funcion con parametro y con retorno

function suma(x,y) {
    
    let suma=x+y;

    return suma
}

console.log(suma(10,32));

