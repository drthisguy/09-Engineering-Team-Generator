const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email),
        this.github = github;
    }
    
    getInstances() {
        return this.instances;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}
module.exports = Engineer;