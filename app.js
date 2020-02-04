const Prompts = require("./lib/Prompts"),
      Manager = require("./lib/Manager"),
      Engineer = require("./lib/Engineer"),
      Intern = require("./lib/Intern"),
      prompt = new Prompts;

//start application
(() => {
  return prompt.start();
})()
  .then(({ ready }) =>
    ready ? newTeam() : console.log("Okay. we'll wait than..."))
  .catch(err => console.log(err));


async function newTeam() {
  try {
    const input = await prompt.user();

    prompt.manager().then(({ office }) => {
      m = new Manager(input.name, input.id, input.email, office);
      console.log(`\nNew manager: "${m.name}" has been added to the team.\n`);
      m.add(m);
      prompt.ask().then(({ add }) =>
          add ? addEmployee() : console.log(m.instances)
        );
    });
  } catch (err) {
    console.log(err);
  }
}

async function addEmployee() {
  try {
    const { role } = await prompt.type(),
      input = await prompt.add();

    switch (role[0]) {
      case "Engineer":
        prompt.engineer().then(({ github }) => {
          e = new Engineer(input.name, input.id, input.email, github);
          console.log(
            `\nNew engineer: "${e.name}" has been added to the team.\n`);

          prompt.ask().then(({ add }) =>
              add ? addEmployee() : console.log("Generating team roster...")
            );
        });
        break;
      default:
        prompt.intern().then(({ school }) => {
          i = new Intern(input.name, input.id, input.email, school);
          console.log(
            `\nNew intern: "${i.name}" has been added to the team.\n`
          );
          prompt.ask().then(({ add }) =>
              add ? addEmployee() : console.log("Generating team roster...")
            );
        });
    }
  } catch (err) {
    console.log(err);
  }
}
