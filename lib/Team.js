const Prompts = require('./Prompts'),
      Manager = require('./Manager'),
      Engineer = require('./Engineer'),
      Intern = require('./Intern'),
      Template = require('./Templates'),
      fs = require('fs'),
      prompt = new Prompts;

class Team  {
  constructor(){
    this.manager = {},
    this.engineers = [],
    this.interns = [];
  }


  // Start App
  start() {
    prompt.start()

    .then(({ ready }) =>
      ready ? this.newTeam() : console.log("Okay. we'll wait than..."))
    .catch(err => console.log(err));
  }

  async newTeam() {
    try {
      const input = await prompt.user();

      prompt.manager().then(({ office }) => {
        console.log(`\nNew manager: "${input.name}" has been added to the team.\n`);
        this.manager = new Manager(input.name, input.id, input.email, office);
        prompt.ask().then(({ add }) =>
            add ? this.addEmployee() : this.generateWeb());
      });
    } catch (err) {
      console.log(err);
    }
  }

  async addEmployee() {
    try {
      const { role } = await prompt.type(),
        input = await prompt.add();

      switch (role) {
        case "Engineer":
          prompt.engineer().then(({ github }) => {
            const e = new Engineer(input.name, input.id, input.email, github);
            console.log(
              `\nNew engineer: "${e.name}" has been added to the team.\n`);
              this.engineers.push(e);
            prompt.ask().then(({ add }) =>
                add ? this.addEmployee() : this.generateWeb());
          });
          break;
        default:
          prompt.intern().then(({ school }) => {
            const i = new Intern(input.name, input.id, input.email, school);
            console.log(
              `\nNew intern: "${i.name}" has been added to the team.\n`);
            this.interns.push(i);
            prompt.ask().then(({ add }) =>
                add ? this.addEmployee() :  this.generateWeb());
          });
      }
    } catch (err) {
      console.log(err);
    }
  }

  generateWeb() {
    console.log('Generating html...\n');

    const template = new Template(),
      cardsArr = [];

      for (const engineer of this.engineers) {
        const card = template.engineer(engineer);
        cardsArr.push(card);
      }
      for (const intern of this.interns) {
        const card = template.intern(intern);
        cardsArr.push(card);
      }
      
      let cards = cardsArr.join().replace(/,/g, "")
      
      
      const outputHTML = template.main(this.manager, cards);
        
        fs.writeFile('output/team.html', outputHTML,  err => {
        if (err) throw err;
        console.log('Team Roster Complete!');
      });
  }
}
module.exports = Team;