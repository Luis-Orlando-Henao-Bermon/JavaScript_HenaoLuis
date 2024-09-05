
let iconst=document.getElementsByClassName("contentImage")
let anterior=iconst[0]

for(const card of iconst){ // para cada div
    card.addEventListener("mouseenter",() => { // agrego un evento que de dispara al entrar al div
      if(!card.classList.contains("first_col")) { // si ese div no contiene la clase first_col:
        anterior.classList.remove("first_col") // le remueve dicha clase al div seleccionado por defecto
        anterior = card; // ahora previous (el div por defecto) es igual al div que disparo este evento
        card.classList.add("first_col") // finalmente le agregamos la clase first_col al div disparador
      }
    })
  }