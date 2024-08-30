document.getElementById("botonB").addEventListener("click", mostrarPersona)

function mostrarPersona() {
    let id = parseInt(document.getElementById("idPersona").value)
    let url = "https://swapi.py4e.com/api/people/" + id + "/"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        var tabla = document.getElementById("tabla")
        document.getElementById("tabla").innerHTML = ""
        var fila = document.createElement('tbody')
        fila.innerHTML += `
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
        fetch(data.homeworld)
            .then(res1 => res1.json())
            .then(home => {
                fila.innerHTML += `
                    <tr>
                        <th> Homeworld: </th>
                        <td>
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <table class="table table-ligth" id="tabla">
                                        <tbody>
                                            <tr><th>Name:</th><td>${home.name}</td></tr>
                                            <tr><th>Rotation period:</th><td>${home.rotation_period}</td></tr>
                                            <tr><th>Orbital period:</th><td>${home.orbital_period}</td></tr>
                                            <tr><th>Diameter:</th><td>${home.diameter}</td></tr>
                                            <tr><th>Climate:</th><td>${home.climate}</td></tr>
                                            <tr><th>Gravity:</th><td>${home.gravity}</td></tr>
                                            <tr><th>Terrain:</th><td>${home.terrain}</td></tr>
                                            <tr><th>Surface water:</th><td>${home.surface_water}</td></tr>
                                            <tr><th>Population:</th><td>${home.spopulation}</td></tr>
                                            <tr><th>Residents:</th><td>${home.residents.map(i => i).join("<br>")}</td></tr>
                                            <tr><th>Films:</th><td>${home.films.map(i => i).join("<br>")}</td></tr>
                                            <tr><th>Created:</th><td>${home.created}</td></tr>
                                            <tr><th>Edited:</th><td>${home.edited}</td></tr>
                                            <tr><th>url:</th><td>${home.url}</td></tr>
                                        </tbody>
                                    </table>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Films: </th>
                        <td>
                            <ul class="list-group" id="film">
                            </ul>
                        </td>
                    </tr>
                `
        })
        tabla.appendChild(fila)
        
        let filmsC=document.getElementById("film")
        console.log(filmsC);
        
        let pelis=document.createElement('li')
        pelis.className='list-group-item'
        console.log(pelis);
        
        for (const i of data.films) {
            fetch(i)
            .then(res2=>res2.json())    
            .then(films=>{
                pelis.innerHTML=`
                    
                    <table class="table table-ligth" id="tabla">
                        <tbody>
                            <tr><th>Title:</th><td>${films.title}</td></tr>
                            <tr><th>Episode id:</th><td>${films.episode_id}</td></tr>
                            <tr><th>Opening crawl:</th><td>${films.opening_crawl}</td></tr>
                            <tr><th>Director:</th><td>${films.director}</td></tr>
                            <tr><th>Producer:</th><td>${films.climate}</td></tr>
                            <tr><th>Release date:</th><td>${films.release_date}</td></tr>
                            <tr><th>Characters:</th><td>${films.characters.map(i=>i).join("<br>")}</td></tr>
                            <tr><th>Planets:</th><td>${films.planets.map(i=>i).join("<br>")}</td></tr>
                            <tr><th>Starships:</th><td>${films.starships.map(i=>i).join("<br>")}</td></tr>
                            <tr><th>Vehicles:</th><td>${films.vehicles.map(i=>i).join("<br>")}</td></tr>
                            <tr><th>Species:</th><td>${films.species.map(i=>i).join("<br>")}</td></tr>
                            <tr><th>Created:</th><td>${films.created}</td></tr>
                            <tr><th>Edited:</th><td>${films.edited}</td></tr>
                            <tr><th>url:</th><td>${films.url}</td></tr>
                        </tbody>
                    </table>
                `
                
            })
            console.log(pelis);
            
           console.log(filmsC);
            
            
        }

    })



}

// <tr><th>Title:</th><td>${films.title}</td></tr>
// <tr><th>Episode id:</th><td>${films.episode_id}</td></tr>
// <tr><th>Opening crawl:</th><td>${films.opening_crawl}</td></tr>
// <tr><th>Director:</th><td>${films.director}</td></tr>
// <tr><th>Producer:</th><td>${films.climate}</td></tr>
// <tr><th>Release date:</th><td>${films.release_date}</td></tr>
// <tr><th>Characters:</th><td>${films.characters.map(i=>i).join("<br>")}</td></tr>
// <tr><th>Planets:</th><td>${films.planets.map(i=>i).join("<br>")}</td></tr>
// <tr><th>Starships:</th><td>${films.starships.map(i=>i).join("<br>")}</td></tr>
// <tr><th>Vehicles:</th><td>${films.vehicles.map(i=>i).join("<br>")}</td></tr>
// <tr><th>Species:</th><td>${films.species.map(i=>i).join("<br>")}</td></tr>
// <tr><th>Created:</th><td>${films.created}</td></tr>
// <tr><th>Edited:</th><td>${films.edited}</td></tr>
// <tr><th>url:</th><td>${films.url}</td></tr>