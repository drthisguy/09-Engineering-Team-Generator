const inquirer = require("inquirer");

class Prompts {

  start() {
    return inquirer.prompt(
        {
        type: "confirm",
        name: "ready",
        message: "Ready to build your engineering team?"
        }
    )
}

  ask() {
    return inquirer.prompt(
        {
        type: "confirm",
        name: "add",
        message: "Should we add a new employee to the team?"
        }
    )
}

 type()   {
    return inquirer.prompt(
       {
        type: "checkbox",
        name: "role",
        message: "What role will he/she have on your team?",
        choices: ["Engineer", "intern"]
        }
    )
}
  
  manager() {
    return inquirer.prompt(
        {
        type: "number",
        name: "office",
        message: "Enter your office room number:"
        }
    )
}

   engineer() {
    return inquirer.prompt(
        {
        type: "input",
        name: "github",
        message: "Enter his/her GitHub username:"
        }
    )
}

   intern() {
    return inquirer.prompt(
        {
        type: "input",
        name: "school",
        message: "What school does he or she attend?"
        }
    )
}

    user() {
     return inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "What is your name?"
        },
        {
        type: "number",
        name: "id",
        message: "Enter your Employee ID #:"
        },
        {
        type: "input",
        name: "email",
        message: "Enter your email address:"
        },
     ])
}

    add() {
    return inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "What is his or her name?"
        },
        {
        type: "number",
        name: "id",
        message: "Enter their Employee ID #:"
        },
        {
        type: "input",
        name: "email",
        message: "Enter their email address:"
        },
      ])
 }
}
module.exports = Prompts;