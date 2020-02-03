const inquirer = require("inquirer"),
      Manager = require("./lib/Manager"),
      Engineer = require("./lib/Engineer"),
      Intern = require("./lib/Intern");

(() => {
  
    return inquirer.prompt([
      {
      type: "confirm",
      name: "ready",
      message: "Ready to build your engineering team?"
      },
    ])
})().then(({ ready }) => ready ? newTeam() : console.log('Okay. we\'ll wait than...'))
.catch( err => console.log(err)) 

async function newTeam() {
  try {
    promptUser().then(input => {
      promptManager().then(({ office }) => {
        m = new Manager(input.name, input.id, input.email, office);
        console.log(`\nNew manager: "${m.name}" has been created.\n`);
        promptNew().then(add =>
          add ? promptType() : console.log("generating...")
        );
      });
    });
  } catch (err) {
    console.log(err);
  }
}

 function addEmployee(role) {
    try{
    switch (role[0]) {
        case 'Engineer':
            promptAdd().then( input => {
                promptEngineer().then(({ github }) => {
                  e = new Engineer(input.name, input.id, input.email, github);
                  console.log(`\nNew engineer: "${e.name}" has been created.\n`);
                  promptNew().then( add =>
                    add ? promptType() : console.log("generating...")
                  );
                });
              });
            break;
        default:
            promptAdd().then( input => {
                promptIntern().then(({ school }) => {
                  i = new Intern(input.name, input.id, input.email, school);
                  console.log(`\nNew intern: "${i.name}" has been created.\n`);
                  promptNew().then( add =>
                    add ? promptType() : console.log("generating...")
                  );
                });
              });
    }
    } catch(err){console.log(err);}
 }

 async function promptType() {
    const { role } = await inquirer.prompt(
    {
        type: "checkbox",
        name: "role",
        message: "What role will he/she have on your team?",
        choices: ["Engineer", "intern"]
    }
 )
    addEmployee(role);
}

 function promptNew() {
    return inquirer.prompt([
        {
        type: "confirm",
        name: "add",
        message: "Should we add a new Employee to the team?"
        }
    ])
  }
  
 function promptManager() {
    return inquirer.prompt([
        {
        type: "number",
        name: "office",
        message: "Enter your office room number:"
        }
    ])
  }

  function promptEngineer() {
    return inquirer.prompt([
        {
        type: "input",
        name: "github",
        message: "Enter his/her GitHub username:"
        }
    ])
}
  function promptIntern() {
    return inquirer.prompt([
        {
        type: "input",
        name: "school",
        message: "What school does he or she attend?"
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

function promptAdd() {
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