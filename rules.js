const drinks=['Irn Bru','Pepsi','Seven Up','Coke','Lemonade','Tea','Fanta','Sprite','Coffee','Cola Zero','Dr Pepper','Milk','Apple Juice',
'Water','Orange Juice','Hot Chocolate','Ginger Ale','Root Beer','Energy Drink','Arnold Palmer','Shirley Temple','Grape Juice',
'Cranberry Juice','Iced Tea','Limeade','Sparkling Water','Chocolate Milk','Mango Juice','Pineapple Juice'];
const rules={},winsNeeded=(drinks.length-1)/2;
for(let drink of drinks)rules[drink]=[];
let matchups=[];
for(let i=0;i<drinks.length;i++)for(let j=i+1;j<drinks.length;j++)matchups.push([drinks[i],drinks[j]]);
for(let i=matchups.length-1;i>0;i--){let randomIndex=Math.floor(Math.random()*(i+1));
[matchups[i],matchups[randomIndex]]=[matchups[randomIndex],matchups[i]]}
for(let match of matchups){let drink1=match[0],drink2=match[1];if(rules[drink1].length<winsNeeded&&rules[drink2].length<winsNeeded)
{if(Math.random()<0.5)rules[drink1].push(drink2);else rules[drink2].push(drink1)}}
