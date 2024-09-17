// class crearBotonShadow extends HTMLElement{
//     constructor(){
//         super();
//         this.innerHTML='<button>Soy un boton lindo</button>'
//     }
// }
// customElements.define('boton-shadow',crearBotonShadow)

class cabezalAño extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`<table class="table table-info table-hover table-borderless border-info">
            <thead>
                <tr>
                    <th scope="col">Municipio</th>
                    <th scope="col">Institucion educativa</th>
                    <th scope="col">Categoria</th>
                </tr>
            </thead>
            <tbody><mi-cuerpo></mi-cuerpo></tbody>

        </table>`
    }
}


class cabezal extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`<table class="table table-info table-hover table-borderless border-info">
            <thead>
                <tr>
                    <th scope="col">Municipio</th>
                    <th scope="col">Institucion educativa</th>
                    <th scope="col">2014</th>
                    <th scope="col">2015</th>
                    <th scope="col">2016</th>
                    <th scope="col">2017</th>
                    <th scope="col">2018</th>
                    <th scope="col">2019</th>
                    <th scope="col">2020</th>
                    <th scope="col">2021</th>
                    <th scope="col">2022</th>
                    <th scope="col">2023</th>
                </tr>
            </thead>
            <tbody><mi-cuerpo></mi-cuerpo></tbody>

        </table>`
    }
}
customElements.define("prueba-icfes",cabezal)
fetch("https://www.datos.gov.co/resource/hk5x-635y.json")
.then(res=>res.json())
.then(datos=>{
    let tbody=document.querySelector(".table")
    let lista=document.createElement("tbody")
    for (const i of datos) {
        lista.innerHTML+=`
        <tr class="table-light table-borderless border-info">
            <td class="table-light">${i.municipio}</td>
            <td class="table-light">${i.institucion_educativa}</td>
            <td class="table-light">${i.a_o_2014}</td>
            <td class="table-light">${i.a_o_2015}</td>
            <td class="table-light">${i.a_o_2016}</td>
            <td class="table-light">${i._2017}</td>
            <td class="table-light">${i._2018}</td>
            <td class="table-light">${i._2019}</td>
            <td class="table-light">${i.a_o_2020}</td>
            <td class="table-light">${i.a_o_2021}</td>
            <td class="table-light">${i.a_o_2022}</td>
            <td class="table-light">${i.a_o_2023}</td>
        </tr>
        `
        tbody.appendChild(lista)
    }
})
customElements.define("mi-cuerpo",colegios)
document.querySelector("#años").addEventListener("click",()=>{
    customElements.define("prueba-icfes",cabezalAño)
})
console.log(document.querySelector("#años").value);
