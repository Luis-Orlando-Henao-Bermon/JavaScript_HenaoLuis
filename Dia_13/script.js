document.getElementById('nuevo').addEventListener('click',nuevoJuego)

function nuevoJuego() {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res=>res.json())
    .then(data=>{
        const deck_id=data.deck_id
        console.log(deck_id);
        let player1=[]
        let player2=[]

        fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=52`)
        .then(resp=>resp.json())
        .then(cartas=>{
            document.querySelector('.cartasA').innerHTML=`<div class="carta">
                    <img src="./content/image-removebg-preview__3_-Pb6UbCBwq-transformed-removebg-preview.png" id="cartaAtras">
                </div>`
            document.querySelector('.cartasB').innerHTML=`
                <div class="carta">
                    <img src="./content/image-removebg-preview__3_-Pb6UbCBwq-transformed-removebg-preview.png" id="cartaAtras">
                </div>
                <button id="lanzar">Lanzar carta</button>`
            
            for (let i = 0; i<26; i++) {
                player1.push(cartas.cards[i])
            }
            for (let i = 26; i<52; i++) {
                player2.push(cartas.cards[i])
            }
            document.getElementById('lanzar').addEventListener('click',lanzarCarta)
            
            function lanzarCarta(){

                    document.querySelector('.cartasA').innerHTML+=`<img src="${player1[0].images.png}" class="cartaVer jugador1">`

                    document.querySelector('.cartasB').innerHTML+=`<img src="${player2[0].images.png}" class="cartaVer jugador2">`
                    
            }
        })
    })
}
