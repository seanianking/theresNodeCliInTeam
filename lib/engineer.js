class Engineer {
    constructor(name, id, email, github){
        this.name = name;
        this.id = id;
        this.email = email;
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