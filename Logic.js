let button = document.getElementById("button");
let gameDrinks;
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
const phonedrinks = drinks.slice(0,7);
if(window.innerWidth <600){
gameDrinks = phonedrinks;
}
else{
gameDrinks = drinks;
}