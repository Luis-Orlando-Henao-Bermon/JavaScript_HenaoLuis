var numero;
document.getElementById('form').addEventListener("submit",function (mostrarPokemon){
    id=document.getElementById('inp').value
    url="https://pokeapi.co/api/v2/pokemon/"+id
    document.getElementById('inp').value=""
    mostrarPokemon.preventDefault()
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        
        if (data.id>920) {
            
            document.getElementById('nombre').innerHTML=`<span>${data.id} -</span> ${data.name[0].toUpperCase()+data.name.substring(1)}`
            document.getElementById('animacion').innerHTML=`<img src="${data.sprites.other["official-artwork"].front_default}" alt="" id="gif">`
            document.getElementById('audio').innerHTML=`<audio src="${data.cries.latest}" autoplay></audio>`
        } else{
            document.getElementById('nombre').innerHTML=`<span>${data.id} -</span> ${data.name[0].toUpperCase()+data.name.substring(1)}`
            document.getElementById('animacion').innerHTML=`<img src="${data.sprites.other.showdown.front_default}" alt="" id="gif">`
            document.getElementById('audio').innerHTML=`<audio src="${data.cries.latest}" autoplay></audio>`

        }

        numero=data.id
    })
})
document.getElementById("next").addEventListener("click",function (next){
    next.preventDefault()
    if (numero<=1024) {
        if (numero>919) {
            numero+=1
            let url2="https://pokeapi.co/api/v2/pokemon/"+numero
            
            fetch(url2)
            .then(res=>res.json())
            .then(dataNext=>{
                document.getElementById('nombre').innerHTML=`<span>${dataNext.id} -</span> ${dataNext.name[0].toUpperCase()+dataNext.name.substring(1)}`
                document.getElementById('animacion').innerHTML=`<img src="${dataNext.sprites.other["official-artwork"].front_default}" alt="" id="gif">`
                document.getElementById('audio').innerHTML=`<audio src="${dataNext.cries.latest}" autoplay></audio>`
            })
            
        } else {
            
            numero+=1
            let url2="https://pokeapi.co/api/v2/pokemon/"+numero
            
            fetch(url2)
            .then(res=>res.json())
            .then(dataNext=>{
                document.getElementById('nombre').innerHTML=`<span>${dataNext.id} -</span> ${dataNext.name[0].toUpperCase()+dataNext.name.substring(1)}`
                document.getElementById('animacion').innerHTML=`<img src="${dataNext.sprites.other.showdown.front_default}" alt="" id="gif">`
                document.getElementById('audio').innerHTML=`<audio src="${dataNext.cries.latest}" autoplay></audio>`
            })
        }
        
    }
})


document.getElementById("pre").addEventListener("click",function(pre){
    pre.preventDefault()
    if (numero>=2) {
        
        if (numero>921) {
            
            numero-=1
            let url3="https://pokeapi.co/api/v2/pokemon/"+numero
            fetch(url3)
            .then(res=>res.json())
            .then(dataPre=>{
                document.getElementById('nombre').innerHTML=`<span>${dataPre.id} -</span> ${dataPre.name[0].toUpperCase()+dataPre.name.substring(1)}`
                document.getElementById('animacion').innerHTML=`<img src="${dataPre.sprites.other["official-artwork"].front_default}" alt="" id="gif">`
                document.getElementById('audio').innerHTML=`<audio src="${dataPre.cries.latest}" autoplay></audio>`
            })
        } else {
            numero-=1
            let url3="https://pokeapi.co/api/v2/pokemon/"+numero
            fetch(url3)
            .then(res=>res.json())
            .then(dataPre=>{
                document.getElementById('nombre').innerHTML=`<span>${dataPre.id} -</span> ${dataPre.name[0].toUpperCase()+dataPre.name.substring(1)}`
                document.getElementById('animacion').innerHTML=`<img src="${dataPre.sprites.other.showdown.front_default}" alt="" id="gif">`
                document.getElementById('audio').innerHTML=`<audio src="${dataPre.cries.latest}" autoplay></audio>`
            })
            
        }
        
    }
})
//Desarrollado por Luis Henao