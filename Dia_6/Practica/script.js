document.getElementById("button1").addEventListener("click",obtenerTexto);
function obtenerTexto() {
    fetch("texto.txt")// Se hace una solicitud al servidor
    .then(res=> res.text())//Se lee la respuesta como texto plano, lo cual devolvera el archivo como una cadena "data"
    .then(data => {//se dara manejo a data mediante imprimiendolo en consola 
        console.log(data);
        document.getElementById("output").innerHTML=data
        
    })
    .catch(err=>{
        console.log("hubo un error");
        document.getElementById("output").innerHTML="hola"
        
    })
}


document.getElementById("button2").addEventListener("click",obtenerJSON);

function obtenerJSON() {
    fetch("elJson.json")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        for (i in data){
            document.getElementById("output").innerHTML+=
            `<h1>Nombre: ${data[i]["name"]}</h1><p>Edad: ${data[i]["old"]}</p>`
        }
        
    })
    
}