let randomNum = Math.round(Math.random())
//console.log("random NUmber:" +randomNum)
let choice = prompt("Welcome to coin flip!! Choose heads or tails?")
if(choice === 'heads'){
    if(randomNum === 1){
        alert("The filp was heads and you chose heads.. you win!")
    }
    else {
        alert("The filp was heads and you chose tails.. you lose!")
    }
}
else if (choice === 'tails'){
    if(randomNum !== 1){
        alert("The filp was tails and you chose tails.. you win!")
    }
    else {
        alert("The filp was tails and you chose heads.. you lose!")
    }
}