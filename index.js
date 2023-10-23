function getComputerChoice() {
    const choiceList = ['rock', 'paper', 'scissors'];
    const choiceInt = Math.floor(Math.random() * 3);
    //console.log(choiceInt)
    return choiceList[choiceInt]
}

let computerPoint = 0
let playerPoint = 0
function playRound(playerSelection, computerSelection) {
    ps = playerSelection.toLowerCase();
    cs = computerSelection;
    if(ps == 'rock' || ps == 'paper' || ps == 'scissors'){
    
    if(cs == 'rock'){
        switch(ps) {
            case 'rock':
                console.log('Tie!')
                break

            case 'paper':
                console.log('player wins!')
                playerPoint += 1
                console.log(playerPoint + ' player : ' + computerPoint + ' computer')
                break
            case 'scissors':
                console.log('computer wins!')
                computerPoint += 1
                console.log(playerPoint + ' player : ' + computerPoint + ' computer')
                break
        }

    }else if(cs== 'paper') {
        switch(ps) {
            case 'rock':
                console.log('computer wins!')
                computerPoint += 1
                console.log(playerPoint + ' player : ' + computerPoint + ' computer')
                break
            case 'paper':
                console.log('Tie!')
                break
            case 'scissors':
                console.log('player wins!')
                playerPoint += 1
                console.log(playerPoint + ' player : ' + computerPoint + ' computer')
                break
        }

    } else if(cs == 'scissors'){
        switch(ps) {
            case 'rock':
                console.log('player wins!')
                playerPoint += 1
                console.log(playerPoint + ' player : ' + computerPoint + ' computer')
                break

            case 'paper':
                console.log('computer wins!')
                computerPoint += 1
                console.log(playerPoint + ' player : ' + computerPoint + ' computer')
                break

            case 'scissors':
                console.log('Tie!')
                break
        }

    }}else {
        console.log('invalid input \n please enter rock, paper or scissors only!')
    }
}





function game() {
    
    for(i =0; i< 5; i++){
        let playerSelection = prompt('enter rock, paper or scissors.')
        let computerSelection = getComputerChoice();
        console.log('player choice: '+ playerSelection)
        console.log('computer chioce: ' + computerSelection)

        playRound(playerSelection, computerSelection)
    }
    if(playerPoint > computerPoint){
        console.log('player wins the  game')
        console.log(playerPoint + ' player : ' + computerPoint + ' computer')
    } else if(playerPoint < computerPoint){
        console.log('computer wins the  game')
        console.log(playerPoint + ' player : ' + computerPoint + ' computer')
    }else{
        console.log('Tie game')
        console.log(playerPoint + ' player : ' + computerPoint + ' computer')
    }
}
game()