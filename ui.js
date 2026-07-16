const colors = {};
for(let drink of allDrinks){
  colors[drink] = {
    background: `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`,
    text: "white"  }};
const buttonArea = document.getElementById("buttons");for (let drink of allDrinks){buttonArea.innerHTML += 
  `<button style="background:${colors[drink].background}; color:${colors[drink].text} margin:5px";
  onclick="play('${drink}')">${drink}</button>`;
}
const h = document.getElementById("h");for (let drink of allDrinks){ h.innerHTML += `<b>${drink}</b> → ${rules[drink].join(", ")}<br>`;}
