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
function resetGame(){
  score.Wins = 0
  score.Losses = 0
  score.Ties = 0
  localStorage.setItem('score', JSON.stringify(score))
  alert("Score reset!")}