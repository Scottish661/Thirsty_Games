const countries = [ 'Scottish', 'English', 'American'];
const drinks = [ 'Irn Bru', 'Pepsi', 'Seven Up', 'Coke', 'Lemonade', 'Tea', 'Fanta', 'Sprite', 'Water', 'Coffee', 'Milk','Cola Zero',
                'Dr Pepper'];
const rules = {};
let allDrinks = [];
for (let country of countries) { for (let drink of drinks) {   
  let countryDrink = country + " " + drink; 
  allDrinks.push(countryDrink);
    }}
for (let drink of allDrinks) {
    rules[drink] = [];
    while (rules[drink].length < 19) {
        let randomDrink =   allDrinks[Math.floor(Math.random() * allDrinks.length)];
        if (  randomDrink !== drink && !rules[drink].includes(randomDrink)
        ) {    rules[drink].push(randomDrink);  }}}
