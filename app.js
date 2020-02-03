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

async function newTeam() {
  try {
    promptUser().then(input => {
      promptMan().then(({ office }) => {
        m = new Manager(input.name, input.id, input.email, office);
        console.log(`\nNew manager: "${m.name}" has been created.`);
        promptNew().then(add =>
          add ? addEmployee() : console.log("generating...")
        );
      });
    });
  } catch (err) {
    console.log(err);
  }
}

 async function addEmployee() {
    const role = await promptType();

    switch (role) {
        case Engineer:
            
            break;
    
        default:
            break;
    }
   
}
 function promptType() {
    return inquirer.prompt([
    {
        type: "checkbox",
        name: "role",
        message: "What role with he/she have on your team?",
        choices: ["Engineer", "intern"]
    }
])
}

 function promptNew() {
    return inquirer.prompt([
        {
        type: "confirm",
        name: "add",
        message: "Should we add a new Employee to the team?"
        },
      ])
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
        message: "Enter your Employee ID #:"
        },
        {
        type: "input",
        name: "email",
        message: "Enter your email address:"
        },
      ])
 }