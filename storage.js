let score = JSON.parse(localStorage.getItem('score')) || { Wins: 0, Losses: 0, Ties: 0 };
function resetGame(){score = { Wins: 0, Losses: 0, Ties: 0 };  localStorage.setItem('score', JSON.stringify(score)); 
hh.textContent = `Wins: ${score.Wins} | Losses: ${score.Losses} | Ties: ${score.Ties}`}
