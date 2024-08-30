document.getElementById("botonB").addEventListener("click",mostrarPersona)

function mostrarPersona() {
    let id =parseInt(document.getElementById("idPersona").value)
    let url= "https://swapi.py4e.com/api/people/"+id+"/"
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        let tabla =document.getElementById("tabla")
        document.getElementById("tabla").innerHTML=""
        var fila=document.createElement('tbody')
        fila.innerHTML+=`
            <tr><th>Name: </th><td>${data.name} </td></tr>
            <tr><th>Height: </th><td>${data.height} </td></tr>
            <tr><th>Mass: </th><td>${data.mass} </td></tr>
            <tr><th>Hair color: </th><td>${data.hair_color} </td></tr>
            <tr><th>Skin color: </th><td>${data.skin_color} </td></tr>
            <tr><th>Eye color: </th><td>${data.eye_color} </td></tr>
            <tr><th>Birth year: </th><td>${data.birth_year} </td></tr>
            <tr><th>Gender: </th><td>${data.gender} </td></tr>
        `
        tabla.appendChild(fila)
        let casa=document.createElement('ul');
        fetch(data.homeworld)
        .then(res1=>res1.json())
        .then(home=>{
            casa.innerHTML+=`
            <li class="list-group-item">
                <table class="table table-dark" id="tabla">
                    <thead>
                        <tr><th>Name:</th><td>${home.name}</td></tr>
                    </thead>
                </table>
            </li>
            `
            
        })
        tabla.appendChild(casa)

        
    })
    
    
    
}