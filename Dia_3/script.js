
function superDigito(n,k) {
    
    let numero=String(n)//Se comvierte el parametro a string
    let cantidadReps=String(k)//Se comvierte el parametro a string
    let nuum=""//Aca se guardara ek superdigito p
    let sum=0;//esta variable guardara la suma de los digitos

    for (let i = 0; i < cantidadReps; i++) {//Se usa un bucle for para ir multiplicar el numero ingresado por la cantidad de veces que quiere que se repita
        nuum+=numero;
    }
    console.log("Super Digit(P) :"+nuum);//imprime la el superdigito(p)
    for (const i of nuum){//se usa un bucle for en la variable nuum (es el numero ingresado convertido en string) para que valla sumando cada digito en la variable sum
        sum+= Number(i)   //como los digitos estan en string uso un number para convertirlo en entero
    }
    while (sum>9){//mientra la suma de los digitos sea mayor a 9 lo cual significa que tiene 2 digitos va a imprimir la suma y volvera a sumar los digitos
        console.log("Super Digit "+sum);   
        nuum=String(sum)
        sum=0
        for (const i of nuum){
            sum+= Number(i) 
        }
    }
    console.log("El Super Digin final es: "+sum);
}
let num1=Number(prompt("ingresa el numero al que se quiere sacar el digito"))
let num2=Number(prompt("ingresa la cantidad de repeticiones"))
superDigito(num1,num2)

//Desarrollado por Luis Henao