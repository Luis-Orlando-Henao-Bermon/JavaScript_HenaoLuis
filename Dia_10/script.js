document.getElementById("armas").addEventListener("click",mostrarArmas)
var armas=document.getElementById("caja2");

function mostrarArmas() {
    document.getElementById("caja2").style.display="flex"
    document.getElementById("caja3").style.display="none"
    document.getElementById("caja4").style.display="none"

    armas.innerHTML=`<div id="inputCaja">
            <input class="form-control w-50" type="text" id="search1">
        </div>`
    fetch("https://valorant-api.com/v1/weapons")
    .then(res=>res.json())
    .then(arm=>{
        for (const i of arm.data) {
            armas.innerHTML+=` 
            
            <div class="card" style="width: 18rem;">
                <img src="${i.displayIcon}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${i.displayName}</h5>
                    <h6 class="card-title">${i.shopData.category}</h6>
                </div>
            </div>     
            `
            searchAgentes()
        }
        function searchAgentes(){
            
            document.getElementById("search1").addEventListener("input", (e)=>{
                let SearchArma = e.target.value;

                let SearchList = arm.data
                SearchList.forEach(ListSearch =>{
                    let displayName = ListSearch.displayName
                    if (SearchArma == displayName){
                        armas.innerHTML=`<div id="inputCaja">
                            <input class="form-control w-50" type="text" id="search1">
                        </div>`
                        armas.innerHTML += `
                        <div class="card" style="width: 25rem;" >
                            <img src="${ListSearch.displayIcon}" class="card-img-top" alt="...">
                            <h3>${ListSearch.displayName}</h3>  
                        </div>
                        `
                    } 
                });
                
            });
        }
    })
}
