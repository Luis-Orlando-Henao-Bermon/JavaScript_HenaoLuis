let iconst=document.getElementsByClassName("contentImage")
iconst[0].classList.add("first_col")
let anterior=iconst[0]
fetch("https://randomuser.me/api/")
.then(res => res.json())
.then(data=>{

  document.getElementById("foto").src=data.results[0].picture.large
  document.getElementById("clave").innerHTML="Hi, Mi name is"
  document.getElementById("valor").innerHTML=` ${data.results[0].name.first} ${data.results[0].name.last} `
              


  for(const card of iconst){ // para cada div
      card.addEventListener("mouseenter",() => { // agrego un evento que de dispara al entrar al div
        if(!card.classList.contains("first_col")) { // si ese div no contiene la clase first_col:
          anterior.classList.remove("first_col") // le remueve dicha clase al div seleccionado por defecto
          anterior = card; // ahora previous (el div por defecto) es igual al div que disparo este evento
          card.classList.add("first_col") // finalmente le agregamos la clase first_col al div disparador
            if (card.classList.contains("perfil")) {
              document.getElementById("clave").innerHTML="Hi, Mi name is"
              
              document.getElementById("valor").innerHTML=` ${data.results[0].name.first} ${data.results[0].name.last} `
              
            }
            if (card.classList.contains("correo")) {
              document.getElementById("clave").innerHTML="My email address is"
              
              document.getElementById("valor").innerHTML=`${data.results[0].email}`
              
            }
            
            if (card.classList.contains("date")) {
              document.getElementById("clave").innerHTML="My birthday is"
              const cumple = new Date(data.results[0].dob.date);
              const fechaCumpleaños = cumple.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              })
              document.getElementById("valor").innerHTML= fechaCumpleaños
              
            }
            
            if (card.classList.contains("ubicacion")) {
              document.getElementById("clave").innerHTML="My address is"
              
              document.getElementById("valor").innerHTML=`${data.results[0].location.street.number} ${data.results[0].location.street.name}`
              
            }
            if (card.classList.contains("telefono")) {
              document.getElementById("clave").innerHTML="My phone number is"
              
              document.getElementById("valor").innerHTML=`${data.results[0].phone} `
              
            }
            if (card.classList.contains("password")) {
              document.getElementById("clave").innerHTML="My password is"
              
              document.getElementById("valor").innerHTML=`${data.results[0].login.password} `
              
            }
          }
        })
    }
})