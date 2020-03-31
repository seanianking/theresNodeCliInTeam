const Employee = require("./employee.js")
class Engineer extends Employee {
    constructor(name, id, email, github){
        // this.name = name;
        // this.id = id;
        // this.email = email;
        super(name, id, email);
        this.github = github;
        this.role = "Engineer"
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return this.role
    }
}
module.exports = Engineer;