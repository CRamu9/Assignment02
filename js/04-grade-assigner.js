let num = parseInt(prompt("Enter a number"))

if(num >=1 && num <= 100)
{
    if (num >= 90 && num <=100){
        console.log("You recieved an A")
    }
    else if(num >= 80 && num < 90){
        console.log("You recieved an B")
    }
    else if(num >= 70 && num < 80){
        console.log("You recieved an C")
    }
    else if(num >=60 && num < 70){
        console.log("You recieved an D")
    }
    else {
        console.log("You recieved an F")
    }
}
else{
    console.log("Enter a number between 1 to 100")
}