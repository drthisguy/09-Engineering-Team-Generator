const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email),
        this.school = school,
        this.instances = [];
    }

    add(teamster) {
        this.instances.push(teamster);
    }

    getInstances() {
        return this.instances;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}
module.exports = Intern;