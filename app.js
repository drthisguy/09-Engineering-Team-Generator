const inquirer = require("inquirer"),
      Manager = require("./lib/Manager");

(() => {
  
    return inquirer.prompt([
      {
      type: "confirm",
      name: "ready",
      message: "Ready to build your engineering team?"
      },
    ])
})().then( ({ready}) => ready ? newTeam() : console.log('Okay. we\'ll wait than...'))
.catch( err => console.log(err)) 

function newTeam() {
 promptUser().then( input => {
    promptMan().then(({office}) => {
    const m = new Manager(input.name, input.id, input.email, office);
    console.log(`New manager: "${m.name}" has been created.`);
})
 })
 }


 function promptMan() {
    return inquirer.prompt([
        {
        type: "number",
        name: "office",
        message: "Enter your office room number."
        }
    ])
  }

function promptUser() {
  
    return inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "What is your name?"
        },
        {
        type: "number",
        name: "id",
        message: "Enter your Employee ID #."
        },
        {
        type: "input",
        name: "email",
        message: "Enter your email address."
        },
      ])
 }