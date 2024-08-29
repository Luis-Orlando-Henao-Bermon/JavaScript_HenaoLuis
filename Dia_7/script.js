

document.getElementById("boton1").addEventListener("click",mostrarHeroe)


function mostrarHeroe() {
    let id= parseInt(document.getElementById("idSuper").value)
    if (id<1||id>731) {
        alert("ID fuera de rango (Rango maximo 731)")
    }else{
        
        let url="https://superheroapi.com/api.php/66f7463330e3cce0b4d0e0c6580f5fb9/"+String(id)
        fetch(url)
        .then(res=>res.json())
        .then(hero=>{
            document.querySelector("#tablaNombre tbody").innerHTML=""
            let tablaNombre= document.querySelector("#tablaNombre tbody")
            var fila=document.createElement("tr")
            fila.innerHTML=`
                <td>${hero.id}</td>
                <td>${hero.name}</td>
                <td><img src="${hero.image.url}"></td>
            `
            tablaNombre.appendChild(fila)

            document.querySelector("#tablaPowerstats tbody").innerHTML=""
            let tablaPowerstats= document.querySelector("#tablaPowerstats tbody")
            fila=document.createElement("tr")
            fila.innerHTML=`
                <td>${hero.powerstats.intelligence}</td>
                <td>${hero.powerstats.strength}</td>
                <td>${hero.powerstats.speed}</td>
                <td>${hero.powerstats.durability}</td>
                <td>${hero.powerstats.power}</td>
                <td>${hero.powerstats.combat}</td>
            `
            tablaPowerstats.appendChild(fila)
           
            document.querySelector("#tablaBiography tbody").innerHTML=""
            let tablaBiography= document.querySelector("#tablaBiography tbody")
            fila=document.createElement("tr")
            fila.innerHTML=`
                <td>${hero.biography["full-name"]}</td>
                <td>${hero.biography["alter-egos"]}</td>
                <td>${hero.biography["aliases"].map(i => i).join('<br>')}</td>
                <td>${hero.biography["place-of-birth"]}</td>
                <td>${hero.biography["first-appearance"]}</td>
                <td>${hero.biography["publisher"]}</td>
                <td>${hero.biography["alignment"]}</td>
            `
            tablaBiography.appendChild(fila)

            document.querySelector("#tablaAppearance tbody").innerHTML=""
            let tablaAppearance= document.querySelector("#tablaAppearance tbody")
            fila=document.createElement("tr")
            fila.innerHTML=`
                <td>${hero.appearance["gender"]}</td>
                <td>${hero.appearance["race"]}</td>
                <td>${hero.appearance["height"].map(i => i).join('<br>')}</td>
                <td>${hero.appearance["weight"].map(i => i).join('<br>')}</td>
                <td>${hero.appearance["eye-color"]}</td>
                <td>${hero.appearance["hair-color"]}</td>
            `
            tablaAppearance.appendChild(fila)

            document.querySelector("#tablaWork tbody").innerHTML=""
            let tablaWork= document.querySelector("#tablaWork tbody")
            fila=document.createElement("tr")
            fila.innerHTML=`
                <td>${hero.work.occupation}</td>
                <td>${hero.work.base}</td>
            `
            tablaWork.appendChild(fila)
            
            document.querySelector("#tablaConeccions tbody").innerHTML=""
            let tablaConeccions= document.querySelector("#tablaConeccions tbody")
            fila=document.createElement("tr")
            fila.innerHTML=`
                <td>${hero.connections["group-affiliation"]}</td>
                <td>${hero.connections.relatives}</td>
            `
            tablaConeccions.appendChild(fila)

        })
    }
    document.getElementById("idSuper").value=""
}