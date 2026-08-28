for (let i = gameDrinks.length - 1; i > 0; i--) {
  let random = Math.floor(Math.random() * (i + 1));
  [gameDrinks[i], gameDrinks[random]] =
  [gameDrinks[random], gameDrinks[i]];}
const rules = {};
let wins = (gameDrinks.length - 1) / 2;
for (let i = 0; i < gameDrinks.length; i++) {
  rules[gameDrinks[i]] = [];
  for (let j = 1; j <= wins; j++) {
    let calculate = (i + j) % gameDrinks.length;
    rules[gameDrinks[i]].push(gameDrinks[calculate])}};