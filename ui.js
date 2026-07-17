function loadGame(){
const colors={};
for(let drink of drinks){colors[drink]={background:`rgb(${Math.floor(Math.random()*256)},
${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`,text:"white"};}
const buttonArea=document.getElementById("buttons");
buttonArea.innerHTML="";
for(let drink of drinks){buttonArea.innerHTML+=`<button style="background:
${colors[drink].background};color:${colors[drink].text};margin:5px" onclick="play('${drink}')">${drink}</button>`;}}
function resetGame(){loadGame();}
loadGame();
