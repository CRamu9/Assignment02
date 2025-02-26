let language = prompt('Enter the language code')
switch (language){
case 'es':
    console.log("Hello World translated in Spanish is: Hola Mundo")
    break
case 'de':
    console.log("Hello World translated in Spanish is: Hallo Welt")
    break
case 'fr':
    console.log("Hello World translated in French is: Bonjour le monde")
    break
default:
    console.log("Hello World in english")
}