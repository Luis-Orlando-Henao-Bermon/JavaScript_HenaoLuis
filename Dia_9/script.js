
document.getElementById('form').addEventListener("submit",function (mostrarPokemon){
    id=document.getElementById('inp').value
    url="https://pokeapi.co/api/v2/pokemon/"+id
    mostrarPokemon.preventDefault()
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        document.getElementById('nombre').innerHTML=`<span>${data.id} -</span> ${data.name}`
        document.getElementById('animacion').innerHTML=`<img src="${data.sprites.other.showdown.front_default}" alt="" id="gif">`

        let url2="https://pokeapi.co/api/v2/pokemon/"+(data.id+1)
        let url3="https://pokeapi.co/api/v2/pokemon/"+(data.id-1)
        document.getElementById("next").addEventListener("click",next)
        function next() {
            
            fetch(url2)
            .then(res=>res.json())
            .then(data=>{
                document.getElementById('nombre').innerHTML=`<span>${data.id} -</span> ${data.name}`
                document.getElementById('animacion').innerHTML=`<img src="${data.sprites.other.showdown.front_default}" alt="" id="gif">`
            })
        }


    })
})