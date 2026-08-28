function resetGame(){
  score.Wins = 0
  score.Losses = 0
  score.Ties = 0
  localStorage.setItem('score', JSON.stringify(score))
  alert("Score reset!")}