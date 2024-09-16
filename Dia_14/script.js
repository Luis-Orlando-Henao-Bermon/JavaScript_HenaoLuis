//creacion deun elemento personalizable

// class crearBoton extends HTMLElement{
//     constructor(){
//         super();
//         this.textContent='Haz click aqui'
//         this.addEventListener('click',()=>{alert("hiciste click")})
//     }
// }
// customElements.define('mi-boton',crearBoton)

//--------------------------------------------------------------------------------

// class crearBotonShadow extends HTMLElement{
//     constructor(){
//         super();
//         let mishadow =this.attachShadow({mode:'open'});
//         mishadow.innerHTML='<button>Soy un boton lindo</button>'
//     }
// }
// customElements.define('boton-shadow',crearBotonShadow)
class crearHeader extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <div id="styleHeader">
            <h1>Live User Filter</h1>
            <p>Search by name and/or location</p>
            <input type="text" name="buscador" id="buscador" placeholder="Search">
        </div>`
    }
}
customElements.define('mi-header',crearHeader)
class personas extends HTMLElement{
    constructor(){
        super();
        fetch("https://66e45b40d2405277ed14070b.mockapi.io/users")
        .then(res=>res.json())
        .then(data=>{
            for (const i of data) {
                this.innerHTML+=`<div class="persona">
                <img src="${i.avatar}"> 
                <div>
                    <h2 id="nombre">${i.name_full}</h2>
                    <p id="descripcion">${i.description}</p>
                </div>
                </div>`
                
            }
        })
    }
}


customElements.define('las-personas',personas)

class crearConenido extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <mi-header></mi-header>
        <las-personas></las-personas>

        `
    }
}
customElements.define('mi-contenido',crearConenido)

//filtrado

document.getElementById("buscador").addEventListener("keyup",e=>{
    console.log(e.target.value);
    if (e.target) {
        document.querySelectorAll(".persona").forEach(element => {
            element.querySelector("#nombre").textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?element.classList.remove("filtro")
                :element.classList.add("filtro")

        });
    }
    
})