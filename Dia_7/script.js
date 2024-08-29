for (let i = 1; i < 732; i++) {
    let url="https://superheroapi.com/api.php/66f7463330e3cce0b4d0e0c6580f5fb9/"+String(i)
    fetch(url)
    .then(res=>res.json())
    .then(hero=>{
        console.log(hero);
    
})
    
}

