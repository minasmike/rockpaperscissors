function getComputerChoice() {
    const choiceList = ['rock', 'paper', 'scissors'];
    const choiceInt = Math.floor(Math.random() * 3);
    return choiceList[choiceInt]
}
  let computerPoint = 0
  let playerPoint = 0
  function playRound(playerSelection, computerSelection) {
      console.log('player choice: '+ playerSelection)
      console.log('computer chioce: ' + computerSelection)
      ps = playerSelection.toLowerCase();
      cs = computerSelection;
      if(ps == 'rock' || ps == 'paper' || ps == 'scissors'){
    
      if(cs == 'rock'){
          switch(ps) {
              case 'rock':
                  console.log('Tie!')
                  bodyMessage('Tie')
                  break

              case 'paper':
                  console.log('player wins!')
                  playerPoint += 1
                  console.log(playerPoint + ' player : ' + computerPoint + ' computer')
                  bodyMessage('player wins')
                  winnerAlert()
                  break
              case 'scissors':
                  console.log('computer wins!')
                  computerPoint += 1
                  console.log(playerPoint + ' player : ' + computerPoint + ' computer')
                  bodyMessage('computer wins')
                  winnerAlert()
                  break
          }

      }else if(cs== 'paper') {
          switch(ps) {
              case 'rock':
                  console.log('computer wins!')
                  computerPoint += 1
                  console.log(playerPoint + ' player : ' + computerPoint + ' computer')
                  bodyMessage('computer wins')
                  winnerAlert()
                  break
              case 'paper':
                  console.log('Tie!')
                  bodyMessage('Tie')
                  break
              case 'scissors':
                  console.log('player wins!')
                  playerPoint += 1
                  console.log(playerPoint + ' player : ' + computerPoint + ' computer')
                  bodyMessage('player wins')
                  winnerAlert()
                  break
          }

      } else if(cs == 'scissors'){
          switch(ps) {
              case 'rock':
                  console.log('player wins!')
                  playerPoint += 1
                  console.log(playerPoint + ' player : ' + computerPoint + ' computer')
                  bodyMessage('player wins')
                  winnerAlert()
                  break

              case 'paper':
                  console.log('computer wins!')
                  computerPoint += 1
                  console.log(playerPoint + ' player : ' + computerPoint + ' computer')
                  bodyMessage('computer wins')
                  winnerAlert()
                  break

              case 'scissors':
                  console.log('Tie!')
                  bodyMessage('Tie')
                  break
          }

      }}else {
          console.log('invalid input \n please enter rock, paper or scissors only!')
      }
  }

  function rockBtnfn(){  
    document.getElementById('results').innerHTML = 'rock'
    playerSelection = 'rock'
    computerSelection = getComputerChoice();
    playRound('rock', computerSelection)
}
function paperBtnfn(){
    document.getElementById('results').innerHTML = 'Paper'
    playerSelection = 'paper'
    computerSelection = getComputerChoice();
    playRound('paper', computerSelection)
}
function scissorsBtnfn(){ 
    document.getElementById('results').innerHTML = 'Scissors'
    playerSelection = 'scissors'
    computerSelection = getComputerChoice();
    playRound('scissors', computerSelection)
}

function winnerAlert(){
    if(computerPoint == 5){
        alert('computer wins')
        playerPoint = 0
        computerPoint = 0
    }
    else if (playerPoint == 5) {
        alert('you win')
        playerPoint = 0
        computerPoint = 0
        
    }
}
function bodyMessage(winner){
    document.getElementById('player').innerHTML = "player choice: " + playerSelection
    document.getElementById('computer').innerHTML = "computer choice: " + computerSelection
    document.getElementById('winner').innerHTML = winner
    document.getElementById('results').innerHTML = playerPoint + ' player : ' + computerPoint + ' computer'
}
