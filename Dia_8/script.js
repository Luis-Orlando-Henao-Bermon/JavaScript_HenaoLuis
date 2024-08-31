document.getElementById("botonB").addEventListener("click", mostrarPersona)

function mostrarPersona() {
    let id = parseInt(document.getElementById("idPersona").value)
    let url = "https://swapi.py4e.com/api/people/" + id + "/"
    fetch(url)
    .then(res => res.json())
    .then(data => {

        if (id>=1 && id<=88) {

            document.getElementById("contenido").style.display="block"
            
            document.getElementById("name").innerHTML=""
            document.getElementById("name").innerHTML=data.name
    
            document.getElementById("heigth").innerHTML=""
            document.getElementById("heigth").innerHTML=data.height
    
            document.getElementById("mass").innerHTML=""
            document.getElementById("mass").innerHTML=data.mass
    
            document.getElementById("hair_color").innerHTML=""
            document.getElementById("hair_color").innerHTML=data.hair_color
    
            document.getElementById("skin_color").innerHTML=""
            document.getElementById("skin_color").innerHTML=data.skin_color
    
            document.getElementById("eye_color").innerHTML=""
            document.getElementById("eye_color").innerHTML=data.eye_color
    
            document.getElementById("bird_year").innerHTML=""
            document.getElementById("bird_year").innerHTML=data.birth_year
    
            document.getElementById("gender").innerHTML=""
            document.getElementById("gender").innerHTML=data.gender
    
            fetch(data.homeworld)
                .then(res1 => res1.json())
                .then(home => {
                    document.getElementById("homeworld").innerHTML =""
                    document.getElementById("homeworld").innerHTML += `
                        
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
                                            
                                
                    `
            })
            document.getElementById("film").innerHTML=""
            let fil=document.getElementById("film")
            
            for (const i of data.films) {
                fetch(i)
                .then(res => res.json())
                .then(films => {
                    fil.innerHTML+=`
                    <li class="list-group-item">
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
                    </li>
                    `
                    
                })
            }
            document.getElementById("species").innerHTML=""
            let species=document.getElementById("species")
    
            for (const i of data.species) {
                fetch(i)
                .then(res => res.json())
                .then(spec => {
                    species.innerHTML+=`
                    <li class="list-group-item">
                        <table class="table table-ligth" id="tabla">
                            <tbody>
                                <tr><th>Name:</th><td>${spec.name}</td></tr>
                                <tr><th>Classification:</th><td>${spec.classification}</td></tr>
                                <tr><th>Designation:</th><td>${spec.designation}</td></tr
                                <tr><th>Average height:</th><td>${spec.average_height}</td></tr>
                                <tr><th>Skin colors:</th><td>${spec.skin_colors}</td></tr>
                                <tr><th>Hair colors:</th><td>${spec.hair_colors}</td></tr>
                                <tr><th>Eye colors:</th><td>${spec.eye_colors}</td></tr>
                                <tr><th>Average lifespan:</th><td>${spec.average_lifespan}</td></tr>
                                <tr><th>Homeworld:</th><td>${spec.homeworld}</td></tr>
                                <tr><th>Language:</th><td>${spec.language}</td></tr>
                                <tr><th>People:</th><td>${spec.people.map(i=>i).join("<br>")}</td></tr>
                                <tr><th>Films:</th><td>${spec.films.map(i=>i).join("<br>")}</td></tr>
                                <tr><th>Created:</th><td>${spec.created}</td></tr>
                                <tr><th>Edited:</th><td>${spec.edited}</td></tr>
                                <tr><th>url:</th><td>${spec.url}</td></tr>
                            </tbody>
                        </table>
                    </li>
                    
                    `
    
                    
                })
            }
    
            document.getElementById("vehicles").innerHTML=""
            let vehicles=document.getElementById("vehicles")
    
            for (const i of data.vehicles) {
                fetch(i)
                .then(res => res.json())
                .then(vehicl => {
                    vehicles.innerHTML+=`
                    <li class="list-group-item">
                        <table class="table table-ligth" id="tabla">
                            <tbody>
                                <tr><th>Name:</th><td>${vehicl.name}</td></tr>
                                <tr><th>Model:</th><td>${vehicl.model}</td></tr>
                                <tr><th>Manufacturer:</th><td>${vehicl.manufacturer}</td></tr
                                <tr><th>Cost in credits:</th><td>${vehicl.cost_in_credits}</td></tr>
                                <tr><th>Length:</th><td>${vehicl.length}</td></tr>
                                <tr><th>Max atmosphering speed:</th><td>${vehicl.max_atmosphering_speed}</td></tr>
                                <tr><th>Crew:</th><td>${vehicl.crew}</td></tr>
                                <tr><th>Passengers:</th><td>${vehicl.passengers}</td></tr>
                                <tr><th>Cargo capacity:</th><td>${vehicl.cargo_capacity}</td></tr>
                                <tr><th>Consumables:</th><td>${vehicl.consumables}</td></tr>
                                <tr><th>Vehicle class:</th><td>${vehicl.vehicle_class}</td></tr>
                                <tr><th>Pilots:</th><td>${vehicl.pilots.map(i=>i).join("<br>")}</td></tr>
                                <tr><th>Films:</th><td>${vehicl.films.map(i=>i).join("<br>")}</td></tr>
                                <tr><th>Created:</th><td>${vehicl.created}</td></tr>
                                <tr><th>Edited:</th><td>${vehicl.edited}</td></tr>
                                <tr><th>url:</th><td>${vehicl.url}</td></tr>
                            </tbody>
                        </table>
                    </li>
                    `
                })
            }
            
            
            document.getElementById("starships").innerHTML=""
            let starships=document.getElementById("starships")
    
            for (const i of data.starships) {
                fetch(i)
                .then(res => res.json())
                .then(stars => {
                    starships.innerHTML+=`
                    <li class="list-group-item">
                        <table class="table table-ligth" id="tabla">
                            <tbody>
                                <tr><th>Name:</th><td>${stars.name}</td></tr>
                                <tr><th>Model:</th><td>${stars.model}</td></tr>
                                <tr><th>Manufacturer:</th><td>${stars.manufacturer}</td></tr
                                <tr><th>Cost in credits:</th><td>${stars.cost_in_credits}</td></tr>
                                <tr><th>Length:</th><td>${stars.length}</td></tr>
                                <tr><th>Max atmosphering speed:</th><td>${stars.max_atmosphering_speed}</td></tr>
                                <tr><th>Crew:</th><td>${stars.crew}</td></tr>
                                <tr><th>Passengers:</th><td>${stars.passengers}</td></tr>
                                <tr><th>Cargo capacity:</th><td>${stars.cargo_capacity}</td></tr>
                                <tr><th>Consumables:</th><td>${stars.consumables}</td></tr>
                                <tr><th>Hyperdrive rating:</th><td>${stars.hyperdrive_rating}</td></tr>
                                <tr><th>MGLT:</th><td>${stars["MGLT"]}</td></tr>
                                <tr><th>Starship class:</th><td>${stars.starship_class}</td></tr>
                                <tr><th>Pilots:</th><td>${stars.pilots.map(i=>i).join("<br>")}</td></tr>
                                <tr><th>Films:</th><td>${stars.films.map(i=>i).join("<br>")}</td></tr>
                                <tr><th>Created:</th><td>${stars.created}</td></tr>
                                <tr><th>Edited:</th><td>${stars.edited}</td></tr>
                                <tr><th>url:</th><td>${stars.url}</td></tr>
                            </tbody>
                        </table>
                    </li>
                    `
                })
            }
            document.getElementById("created").innerHTML=""
            document.getElementById("created").innerHTML=data.created
    
            document.getElementById("edited").innerHTML=""
            document.getElementById("edited").innerHTML=data.edited
            
            document.getElementById("url").innerHTML=""
            document.getElementById("url").innerHTML=data.url
        }else{
            document.getElementById("contenido").style.display="none"
            alert("ID fuera de rango (Rango maximo 88)")
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