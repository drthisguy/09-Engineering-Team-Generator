const Prompts = require('./Prompts'),
      Manager = require('./Manager'),
      Engineer = require('./Engineer'),
      Intern = require('./Intern'),
      Template = require('./templates'),
      fs = require('fs'),
      path = require("path"),
      open = require("open"),
      prompt = new Prompts;

class Team  {
  constructor(){
    this.manager = {},
    this.instances = [];
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

      if(prompt.validate(input))  {

      prompt.manager().then(({ office }) => {
        this.manager = new Manager(input.name, input.id, input.email, office);
        console.log(`\nNew manager: "${input.name}" has been added to the team.\n`);
        prompt.ask().then(({ add }) =>
            add ? this.addEmployee() : this.generateWeb());
    })
  } else {
    this.newTeam();
  }
    } catch (err) {
      console.log(err);
    }
  }

  async addEmployee() {
    try {
      const { role } = await prompt.type(),
        input = await prompt.add();

        if (prompt.validate(input)) {

      switch (role) {
        case "Engineer":
          prompt.engineer().then(({ github }) => {
            const e = new Engineer(input.name, input.id, input.email, github);
            console.log(
              `\nNew engineer: "${e.name}" has been added to the team.\n`);
              this.instances.push(e);
            prompt.ask().then(({ add }) =>
                add ? this.addEmployee() : this.generateWeb());
          });
          break;
        default:
          prompt.intern().then(({ school }) => {
            const i = new Intern(input.name, input.id, input.email, school);
            console.log(
              `\nNew intern: "${i.name}" has been added to the team.\n`);
            this.instances.push(i);
            prompt.ask().then(({ add }) =>
                add ? this.addEmployee() :  this.generateWeb());
          });
      }
    }else{ 
      this.addEmployee();
    }
    } catch (err) {console.log(err);}
  }

  generateWeb() {
    console.log('Generating html...\n');

    const template = new Template(),
      cardsArr = [];

      for (let instance of this.instances) {
        if (instance instanceof Engineer) {
        const card = template.engineer(instance);
        cardsArr.push(card);
      } else {
        const card = template.intern(instance);
        cardsArr.push(card);
      }
    }
      let cards = cardsArr.join().replace(/,/g, "")

      const outputHTML = template.main(this.manager, cards);
        
        fs.writeFile('output/team.html', outputHTML,  err => {
        if (err) throw err;
        console.log('Team Roster Complete!\n Opening team.html...');
        open(path.join(process.cwd(), 'output/team.html'));
      });
  }
}
module.exports = Team;