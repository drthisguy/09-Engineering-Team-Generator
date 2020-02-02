const inquirer = require("inquirer");

class Employee {
    constructor (id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.title = 'Employee';
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }
    getEmail() {
        return this.Email;
    }
      
    getRole() {
        return this.title;
    }

}
module.exports = Employee;