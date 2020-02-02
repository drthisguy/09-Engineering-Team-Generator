class Employee {
    constructor (name, id, email) {
        this.id = id;
        this.name = name;
        this.email = email;
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
        return 'Employee';
    }
}
module.exports = Employee;