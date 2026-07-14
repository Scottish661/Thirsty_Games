const drinks = [
  'Irn Bru','Pepsi','Seven Up','Coke','Lemonade','Tea','Fanta','Sprite','Water','Coffee','Milk','Juice','Cola Zero',
  'Dr Pepper','Ginger Ale','Tonic','Energy Drink','Arnold Palmer','Shirley Temple'
]
const rules = {};
for(let drink of drinks){
    rules[drink] = [];
    while(rules[drink].length < 9){
        let randomDrink =
        drinks[Math.floor(Math.random()*drinks.length)];
        if(
            randomDrink !== drink &&
            !rules[drink].includes(randomDrink)
        ){
            rules[drink].push(randomDrink);
        }
    }
}