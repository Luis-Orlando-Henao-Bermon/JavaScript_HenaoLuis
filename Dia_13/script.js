document.getElementById('nuevo').addEventListener('click',nuevoJuego)

function nuevoJuego() {
    document.querySelector('.cargar').innerHTML='Cargando...'
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res=>res.json())
    .then(data=>{
        document.querySelector('.cargar').innerHTML=''

        const deck_id=data.deck_id
        console.log(deck_id);

        var player1=[]
        var player2=[]

        fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=52`)
        .then(resp=>resp.json())
        .then(cartas=>{
            document.querySelector('.cartasA').innerHTML=`<div class="carta">
                    <img src="./content/image-removebg-preview__3_-Pb6UbCBwq-transformed-removebg-preview.png" id="cartaAtras">
                </div>`
            document.querySelector('.cartasB').innerHTML=`
                <div class="carta">
                    <img src="./content/image-removebg-preview__3_-Pb6UbCBwq-transformed-removebg-preview.png" id="cartaAtras">
                </div>`

            for (let i = 0; i<26; i++) {
                player1.push(cartas.cards[i])
            }
            for (let i = 26; i<52; i++) {
                player2.push(cartas.cards[i])
            }
            document.getElementById('lanzar').addEventListener('click',lanzarCarta)

            function lanzarCarta(){
                if (player1.length==0) {
                    document.querySelector('.cargar').innerHTML='Ganaste el juego'
                } 
                else if (player2.length==0) {
                    document.querySelector('.cargar').innerHTML='Perdiste el juego'
                }
                else {
    
                    document.querySelector('.cartasA').innerHTML=`
                    <div class="carta">
                        <img src="./content/image-removebg-preview__3_-Pb6UbCBwq-transformed-removebg-preview.png" id="cartaAtras">
                    </div>
                    <img src="${player1[0].images.png}" class="cartaVer jugador1">
                    <p>Tienes  ${player1.length} cartas</p>`
                    let cartaA=player1[0]
                    player1.splice(0,1)
    
                    document.querySelector('.cartasB').innerHTML=`
                    <div class="carta">
                        <img src="./content/image-removebg-preview__3_-Pb6UbCBwq-transformed-removebg-preview.png" id="cartaAtras">
                    </div>
                    <img src="${player2[0].images.png}" class="cartaVer jugador2">
                    <p>Tienes  ${player2.length} cartas</p>`
                    let cartaB=player2[0]
                    player2.splice(0,1)
    
                    var numeroCarta1
                    var numeroCarta2
                    //Convertir en numero la carta de la computadora
                    if (cartaA.value=='QUEEN') {
                        numeroCarta1=12
                    } 
                    else if(cartaA.value=='JACK'){
                        numeroCarta1=11
                    }
                    else if(cartaA.value=='ACE'){
                        numeroCarta1=1
                    }
                    else if(cartaA.value=='KING'){
                        numeroCarta1=13
                    }
                    else {
                        numeroCarta1=Number(cartaA.value)
                    }
                    console.log(numeroCarta1);
                    //convertir numero la carta de el usuario jugando
                    if (cartaB.value=='QUEEN') {
                        numeroCarta2=12
                    } 
                    else if(cartaB.value=='JACK'){
                        numeroCarta2=11
                    }
                    else if(cartaB.value=='ACE'){
                        numeroCarta2=1
                    }
                    else if(cartaB.value=='KING'){
                        numeroCarta2=13
                    }
                    else {
                        numeroCarta2=Number(cartaB.value)
                    }
                    console.log(numeroCarta2);
                    
                    if (numeroCarta1>numeroCarta2) {
                        document.querySelector('.cargar').innerHTML='Perdiste esta ronda'
                        player1.push(cartaA)
                        player1.push(cartaB)
                    } 
                    else if (numeroCarta1===numeroCarta2) {
                        document.querySelector('.cargar').innerHTML='Empate'
                    }
                    else {
                        document.querySelector('.cargar').innerHTML='Ganaste esta ronda'
                        player2.push(cartaB)
                        player2.push(cartaA)
                        
                    }
                    
                }
            }
        })
    })
}
