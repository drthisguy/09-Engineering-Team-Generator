const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email),
        this.office = office,
        this.instances = [];
    }
    
    add(teamster) {
        this.instances.push(teamster);
    }

    getInstances() {
        return this.instances;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;