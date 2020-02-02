const Employee = require("./Employee");

class Manager extends Employee {
    constructor(office) {
        super(id, name, email);
        this.office = office;
        this.title = 'title';
    }

        
    getOffice() {
        return this.office;
    }

    getRole() {
        return 'Manager';
    }
}