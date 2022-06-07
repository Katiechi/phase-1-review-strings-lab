// Write your code in this file!
const currentUser = "Brian Ambundo"
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`
console.log(excitedWelcomeMessage)

const splitString = currentUser.split(' ')
console.log(splitString)
const shortGreeting = `Welcome, ${splitString[0]} !`