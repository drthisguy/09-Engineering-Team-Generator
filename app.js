const Prompts = require("./lib/Prompts"),
      Manager = require("./lib/Manager"),
      Engineer = require("./lib/Engineer"),
      Intern = require("./lib/Intern"),
      Template = require("./lib/templates"),
      prompt = new Prompts;

 let manager;
 const engineers = [],
 interns = [];

 //start app
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
      manager = m;
      prompt.ask().then(({ add }) =>
          add ? addEmployee() : generateWeb());
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
            engineers.push(e);
          prompt.ask().then(({ add }) =>
              add ? addEmployee() : generateWeb());
        });
        break;
      default:
        prompt.intern().then(({ school }) => {
          i = new Intern(input.name, input.id, input.email, school);
          console.log(
            `\nNew intern: "${i.name}" has been added to the team.\n`);
           interns.push(i);
          prompt.ask().then(({ add }) =>
              add ? addEmployee() :  generateWeb());
        });
    }
  } catch (err) {
    console.log(err);
  }
}

function generateWeb() {
  const template = new Template(),
    cardsArr = [];

    for (let engineer of engineers) {
      const card = template.engineer(engineer);
      cardsArr.push(card);
    }
    for (let intern of interns) {
      const card = template.intern(intern);
      cardsArr.push(card);
    }
  
    let cards = cardsArr.join();
      cards = cards.replace(",", "");

    const outputHTML = template.main(manager, cards);

    console.log(outputHTML);

 }