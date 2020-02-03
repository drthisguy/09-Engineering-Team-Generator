const Prompts = require("./lib/Prompts"),
      Manager = require("./lib/Manager"),
      Engineer = require("./lib/Engineer"),
      Intern = require("./lib/Intern"),
      prompt = new Prompts;

(async () => {
    return await prompt.start();

})().then(({ ready }) => ready ? newTeam() : console.log('Okay. we\'ll wait than...'))
.catch( err => console.log(err)) 

function newTeam() {
  try {
    prompt.user().then( input => {
      prompt.manager().then(({ office }) => {
        m = new Manager(input.name, input.id, input.email, office);
        console.log(`\nNew manager: "${m.name}" has been added to the team.\n`);
        prompt.ask().then(({ add }) => add ? addEmployee() : console.log("Generating team webpage...")
        );
      });
    });
  } catch (err) {
    console.log(err);
  }
}

  function addEmployee() {
    try{
    prompt.type().then(({ role }) => { 

    switch (role[0]) {
        case 'Engineer':
            prompt.add().then( input => {
                prompt.engineer().then(({ github }) => {
                  e = new Engineer(input.name, input.id, input.email, github);
                  console.log(`\nNew engineer: "${e.name}" has been added to the team.\n`);
                  prompt.ask().then(({ add }) =>
                    add ? addEmployee() : console.log("Generating team webpage...")
                  );
                });
              });
            break;
        default:
            prompt.add().then( input => {
                prompt.intern().then(({ school }) => {
                  i = new Intern(input.name, input.id, input.email, school);
                  console.log(`\nNew intern: "${i.name}" has been added to the team.\n`);
                  prompt.ask().then(({ add }) =>
                    add ? addEmployee() : console.log("Generating team webpage...")
                  );
                });
              });
    }});
    } catch(err){console.log(err);}
 }
