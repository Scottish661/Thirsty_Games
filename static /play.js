function play(move){
  const cm = gameDrinks[Math.floor(Math.random() * gameDrinks.length)]
  let r = ""
  if (move === cm){
    r = "tie"
    score.Ties++
  }
  else if (rules[move].includes(cm)){
    r = "You Win"
    score.Wins++
  }
  else{
    r = "You Lose"
    score.Losses++
  }
  localStorage.setItem('score', JSON.stringify(score))
 h.textContent = `you chose ${move}, computer chose ${cm}, ${r}\n` +`Wins: 
 ${score.Wins} | Losses: ${score.Losses} | Ties: ${score.Ties}`}
  for (let drink in rules) { show_rules.innerHTML += `${drink} → ${rules[drink].join(", ")}<br>`};