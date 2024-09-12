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
        document.querySelector('.ver1').innerHTML=""
        document.querySelector('.ver2').innerHTML=""
        document.querySelector('.ganador').innerHTML=""
        
        

        fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=52`)
        .then(resp=>resp.json())
        .then(cartas=>{
            document.querySelector('.cartasA').innerHTML=`<div class="carta">
                PC
                    <img src="./content/image-removebg-preview__3_-Pb6UbCBwq-transformed-removebg-preview.png" id="cartaAtras">
                </div>`
            document.querySelector('.cartasB').innerHTML=`
                <div class="carta">
                    Jugador
                    <img src="./content/image-removebg-preview__3_-Pb6UbCBwq-transformed-removebg-preview.png" id="cartaAtras">
                </div>`
            
            for (let i = 0; i<10; i++) {
                player1.push(cartas.cards[i])
            }
            for (let i = 26; i<36; i++) {
                player2.push(cartas.cards[i])
            }
            document.getElementById('lanzar').addEventListener('click',lanzarCarta)

            function lanzarCarta(){
                if (player1.length==0) {
                    document.querySelector('.cargar').innerHTML=''
                    document.querySelector('.ganador').innerHTML='Ganaste el juego 😁'
                    document.querySelector('.ver1').innerHTML=``
                    document.querySelector('.ver2').innerHTML=``
                } 
                else if (player2.length==0) {
                    document.querySelector('.cargar').innerHTML=''
                    document.querySelector('.ganador').innerHTML='Perdiste el juego 😢'
                    document.querySelector('.ver1').innerHTML=``
                    document.querySelector('.ver2').innerHTML=``
                }
                else {
                    document.querySelector('.ver1').innerHTML=""
                    document.querySelector('.ver2').innerHTML=""
                    document.querySelector('.ganador').innerHTML=""


                    document.querySelector('.ver1').innerHTML=`
                    <img src="${player1[0].images.png}" class="cartaVer jugador1">`
                    let cartaA=player1[0]
                    player1.splice(0,1)
                    document.querySelector('.cartasA').innerHTML=`<div class="carta">
                    PC
                        <img src="./content/image-removebg-preview__3_-Pb6UbCBwq-transformed-removebg-preview.png" id="cartaAtras">
                    </div>
                    <p>Tienes  ${player1.length} cartas</p>`


                    document.querySelector('.ver2').innerHTML=`
                    <img src="${player2[0].images.png}" class="cartaVer jugador2">
                    `
                    let cartaB=player2[0]
                    player2.splice(0,1)
                    document.querySelector('.cartasB').innerHTML=`<div class="carta">
                        Jugador
                        <img src="./content/image-removebg-preview__3_-Pb6UbCBwq-transformed-removebg-preview.png" id="cartaAtras">
                    </div>
                    <p>Tienes  ${player2.length} cartas</p>
                    `
    
                    var numeroCarta1
                    var numeroCarta2
                    //Convertir en numero la carta de la PC
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
