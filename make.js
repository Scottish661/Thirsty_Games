function make(drink){
let R = Math.floor(Math.random() * 256);
let G = Math.floor(Math.random() * 256);
let B = Math.floor(Math.random() * 256);
    button.innerHTML +=`<button style="background-color:rgb(${R},${G},${B});" 
    onclick="play('${drink}')"> ${drink} </button>`}
drinks.forEach(make)
