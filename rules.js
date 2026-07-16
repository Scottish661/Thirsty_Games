const drinks = [  'Irn Bru', 'Pepsi', 'Seven Up', 'Coke', 'Lemonade',  'Tea',  'Fanta',  'Sprite', 'Coffee', 'Cola Zero',  'Dr Pepper',
'Milk','Apple_Juice','water','Orange_juice'];const rules = {} for (let drink of drinks) {rules[drink] = [];
  while (rules[drink].length < 5) { let randomDrink =  drinks[Math.floor(Math.random() * drinks.length)];
  if ( randomDrink !== drink && !rules[drink].includes(randomDrink) {rules[drink].push(randomDrink); }}}
