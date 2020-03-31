const Employee = require("./employee.js")
class Engineer extends Employee {
    constructor(name, id, email, school){
        // this.name = name;
        // this.id = id;
        // this.email = email;
        super(name, id, email);
        this.school = school;
        this.role = "Intern"
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return this.role
    }
}
module.exports = Engineer;