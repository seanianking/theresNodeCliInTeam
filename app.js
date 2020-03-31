const inquirer = require("inquirer");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const fs = require("fs");
const arrayOfCards = [];
let teamCardsHTML = "";
const generateHTML = ("./templates/templateHTML.js");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);



//Start with prompts to get information:
function getSchool() {
    const school = inquirer.prompt({
        type: "input",
        message: "Which school produced the intern?",
        name: "school"
    });
    return school;
};

function getOfficeNumber() {
    const officeNumber = inquirer.prompt({
        type: "input",
        message: "What is the Manager's address?",
        name: "officeNumber"
    });
    return officeNumber;
};

function getGithub() {
    const username = inquirer.prompt({
        type: "input",
        message: "GitHub username, please:",
        name: "username"
    });
    return username;
};

function getRole() {
    const role = inquirer.prompt({
        type: "list",
        name: "role",
        message: "What does the employee do?",
        choices: ["Manager", "Engineer", "Intern"]
    });
    return role;
};

function getEmail() {
    const email = inquirer.prompt({
        type: "input",
        message: "Please input your company email:",
        name: "email"
    });
    return email;
};

function getId() {
    const id = inquirer.prompt({
        type: "input",
        message: "What is the Employee's ID number?",
        name: "id"
    });
    return id;
};

function getName() {
    const name = inquirer.prompt({
        type: "input",
        message: "Tell me, what are your first and last names?",
        name: "name"
    });
    return name;
};

function addEmployees() {
    const choice = inquirer.prompt({
        type: "list",
        name: "result",
        message: "add another Employee",
        choices: ["Yes.", "No."]
    });
    return choice;
}

//Ensure capitaliztion for name
function capitalize(string) {
    var splitString = string.toLowerCase().split(" ");
    for (var i = 0; i < splitString.length; i++) {
        splitString[i] =
            splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }
    return splitString.join(" ");
};

//Start async function to run inquire and gather data
async function init() {
    let anotherEmployee = "Yes.";
    do {
        //Call functions to run prompts and get employee data
        try {
            let employeeInfo;
            let { name } = await getName();
            name = capitalize(name);
            let { id } = await getId();
            let { email } = await getEmail();
            let { role } = await getRole();
            //Pushes information to array and gathers information based off of input role
            switch (role) {
                case "Manager":
                    employeeInfo = await getOfficeNumber();
                    let manager = new Manager(name, id, email, employeeInfo.officeNumber);
                    arrayOfCards.push(manager);
                    break;
                case "Engineer":
                    employeeInfo = await getGithub();
                    let engineer = new Engineer(name, id, email, employeeInfo.username);
                    arrayOfCards.push(engineer);
                    break;
                case "Intern":
                    employeeInfo = await getSchool();
                    let intern = new Intern(name, id, email, employeeInfo.school);
                    arrayOfCards.push(intern);
                    break;
            }
            anotherEmployee = await addEmployees;
        }
        catch (err) {
            console.log(err);
        }

    }
    while (anotherEmployee.result === "Yes.");
    //Generate cards
    for (var i=0; i<arrayOfCards.length; i++){
        let card = generateHTML.cardsHTML(teamCardsHTML[i]);
        teamCardsHTML += card;    
    }
    let HTML = generateHTML.generateHTML(teamCardsHTML);
    writeFileAsync("./output/team.html", HTML)

}

init();