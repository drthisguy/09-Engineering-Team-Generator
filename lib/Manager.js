const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, email, office) {
        super(id, name, email);
        this.officeNumber = office;
    }


    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;