class Employee {
    constructor (name, id, email) {
        this.id = id,
        this.name = name;
    }


    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }
      
    getRole() {
        return 'Employee';
    }
}
module.exports = Employee;