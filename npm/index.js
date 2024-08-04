// building a url to qrcode to website application
import inquirer from 'inquirer';
// const inquirer = require("inquirer")

// var qrcode = require('qrcode-terminal');
import qrcode from "qrcode-terminal"

inquirer
    .prompt([
        /* Pass your questions in here */
        {
            message: "Enter your URL please!",
            name: "URL",
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers);
        qrcode.generate(answers.URL, { small: true }, (qrcode) => {
            console.log(qrcode)
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });