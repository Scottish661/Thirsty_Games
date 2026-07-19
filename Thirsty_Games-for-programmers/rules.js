const drinks=['Irn Bru','Pepsi','Seven Up','Coke','Lemonade','Tea','Fanta','Sprite','Coffee','Cola Zero','Dr Pepper','Milk','Apple Juice'
,'Water','Orange Juice','Hot Chocolate','Ginger Ale','Root Beer','Energy Drink','Arnold Palmer','Shirley Temple','Grape Juice',
'Cranberry Juice','Iced Tea','Limeade','Sparkling Water','Chocolate Milk','Mango Juice','Pineapple Juice'];
const rules = {};
for (let drink of drinks) {
    rules[drink] = [];
    while (rules[drink].length < (drinks.length - 1)/2) {
        let randomDrink =   drinks[Math.floor(Math.random() * drinks.length)];
        if (  randomDrink !== drink && !rules[drink].includes(randomDrink)
        ) {    rules[drink].push(randomDrink);  }}}
