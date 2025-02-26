
let x = prompt('Enter a number');
let y = prompt('Enter another number');

if ((parseInt(x) !== parseInt(y)) && (parseInt(x) > parseInt(y))){
    document.write("The largest number is " +x)
}
else if ((parseInt(x) !== parseInt(y)) &&  (parseInt(y) > parseInt(x)))
{
    document.write("The largest number is " +y)
}
else
{
    document.write("Try two different numbers")
}