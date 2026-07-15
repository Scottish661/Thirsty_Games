function play(move){
  const cm = drinks[Math.floor(Math.random() * drinks.length)]
  let r = ""
  move === cm
  ? (r = "Tie", score.Ties++) : rules[move].includes(cm)   ? (r = "You Win", score.Wins++)   : (r = "You Lose", score.Losses++)
  localStorage.setItem('score', JSON.stringify(score))
  h.textContent = 
    `you chose ${move}, computer chose ${cm}, ${r}\n` +
    `Wins: ${score.Wins} | Losses: ${score.Losses} | Ties: ${score.Ties}`
}
    
