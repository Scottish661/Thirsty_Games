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