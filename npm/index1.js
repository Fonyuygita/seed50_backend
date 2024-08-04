const generateSillyName = require("sillyname");
const readLine = require("readline")

const sillyName = generateSillyName();
console.log("WELCOME TO SILLYNAME GENERATOR 🆔");


const inputOutput = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

// take actual input from the user

inputOutput.question("What is your name? \n", (name) => {
    console.log(`welcome ${name}`);
    console.log(`Hey ${name} your silly name is ${sillyName}`)
})
