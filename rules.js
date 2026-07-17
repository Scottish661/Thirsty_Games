const drinks = ['Irn Bru', 'Pepsi', 'Seven Up', 'Coke', 'Lemonade', 'Tea', 'Fanta', 'Sprite', 'Coffee', 'Cola Zero', 'Dr Pepper', 'Milk',
'Apple Juice', 'Water', 'Orange Juice', 'Hot Chocolate', 'Ginger Ale', 'Root Beer', 'Energy Drink', 'Arnold Palmer', 'Shirley Temple',
'Grape Juice', 'Cranberry Juice', 'Iced Tea', 'Limeade', 'Sparkling Water', 'Chocolate Milk', 'Mango Juice', 'Pineapple Juice'];
const rules={};
const winsNeeded = (drinks.length - 1) / 2;
for(let drink of drinks){
  rules[drink]=[];
  while(rules[drink].length<winsNeeded){
    let randomDrink=drinks[Math.floor(Math.random()*drinks.length)];
    if(randomDrink!==drink&&!rules[drink].includes(randomDrink)){ rules[drink].push(randomDrink);}  }}

    if (
      randomDrink !== drink &&
      !rules[drink].includes(randomDrink) &&
      !rules[randomDrink].includes(drink)
    ) {
      rules[drink].push(randomDrink);
    }
  }
}
