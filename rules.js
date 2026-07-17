const drinks=['Irn Bru','Pepsi','Seven Up','Coke','Lemonade','Tea','Fanta','Sprite','Coffee','Cola Zero','Dr Pepper','Milk','Apple Juice',
'Water','Orange Juice','Hot Chocolate','Ginger Ale','Root Beer','Energy Drink','Arnold Palmer','Shirley Temple','Grape Juice',
'Cranberry Juice','Iced Tea','Limeade','Sparkling Water','Chocolate Milk','Mango Juice','Pineapple Juice'];
function makeRules(){
while(true){
const rules={},winsNeeded=(drinks.length-1)/2,matchups=[];
for(let drink of drinks)rules[drink]=[];
for(let i=0;i<drinks.length;i++)for(let j=i+1;j<drinks.length;j++)matchups.push([drinks[i],drinks[j]]);
for(let i=matchups.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[matchups[i],matchups[j]]=[matchups[j],matchups[i]]}
for(let [a,b] of matchups){if(rules[a].length<winsNeeded&&rules[b].length<winsNeeded){if(Math.random()<0.5)
rules[a].push(b);else rules[b].push(a)}}
if(drinks.every(d=>rules[d].length===winsNeeded))return rules;}}
