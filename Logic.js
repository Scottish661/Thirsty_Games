let button = document.getElementById("button");
  let h = document.getElementById("h");
function ChangeColor() {
    let input = document.getElementById("input").value;
    document.body.style.backgroundColor = input;
    localStorage.setItem("backgroundColor", input);}
let savedColor = localStorage.getItem("backgroundColor");
if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    document.getElementById("input").value = savedColor;}
const score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,Losses: 0,Ties: 0}
const drinks = [
  'Iron Brew','Blue Pop','Lemon Up','Classic Cola','Lemonade','Tea','Orange Fizz','Lime Fizz',
  'Water','Coffee','Milk','Juice','Zero Cola','Doc Fizz','Ginger Ale',
  'Tonic','Energy Drink','Half & Half','Cherry Grenadine']
function make(drink){
let R = Math.floor(Math.random() * 256);
let G = Math.floor(Math.random() * 256);
let B = Math.floor(Math.random() * 256);
    button.innerHTML +=`<button style="background-color:rgb(${R},${G},${B});" 
    onclick="play('${drink}')"> ${drink} </button>`}
drinks.forEach(make)
for(let i = drinks.length-1; i > 0; i--){
  let random = Math.floor(Math.random() * (i + 1));
 [drinks[i],drinks[random]] = [drinks[random],drinks[i]];
}
const rules = {}
let wins = (drinks.length - 1) / 2
for (let i = 0; i < drinks.length; i++) {
  rules[drinks[i]] = []
for(let j = 1; j <= wins; j++){
 let calculate  =  (i + j) % drinks.length
rules[drinks[i]].push(drinks[calculate])
}}
function play(move){
  const cm = drinks[Math.floor(Math.random() * drinks.length)]
  let r = ""
  if (move === cm){
    r = "tie"
    score.Ties++
  }
  else if (rules[move].includes(cm)){
    r = "You Win"
    score.Wins++
  }
  else{
    r = "You Lose"
    score.Losses++
  }
  localStorage.setItem('score', JSON.stringify(score))
 h.textContent = `you chose ${move}, computer chose ${cm}, ${r}\n` +`Wins: 
 ${score.Wins} | Losses: ${score.Losses} | Ties: ${score.Ties}`}
  for (let drink in rules) { show_rules.innerHTML += `${drink} → ${rules[drink].join(", ")}<br>`;}
function resetGame(){
  score.Wins = 0
  score.Losses = 0
  score.Ties = 0
  localStorage.setItem('score', JSON.stringify(score))
  alert("Score reset!")}