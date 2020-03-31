const inquirer = require("inquirer");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const fs = require("fs");
const arrayOfCards = [];
let CardsHTML = "";
const generateHTML = ("./templates/templateHTML.js");


//Start with prompts to get information:
function getSchool(){
    const school = inquirer.prompt({
        type: "input",
        message: "Which school produced the intern?",
        name: "school"
    });
    return school;
};

function getOfficeNumber(){
    const officeNumber = inquirer.prompt({
        type: "input",
        message: "What is the Manager's address?",
        name: "officeNumber"
    });
    return officeNumber;
};

function getOfficeGithub(){
    const username = inquirer.prompt({
        type: "input",
        message: "GitHub username, please:",
        name: "username"
    });
    return username;
};

function getRole(){
    const role = inquirer.prompt({
        type: "input",
        message: "What does the employee do?",
        choices: ["Manager", "Engineer", "Intern"]
    });
    return role;
};

function getEmail(){
    const email = inquirer.prompt({
        type: "input",
        message: "Please input your company email:",
        name: "email"
    });
    return email;
};

function getId(){
    const id = inquirer.prompt({
        type: "input",
        message: "What is the Employee's ID number?",
        name: "id"
    });
    return id;
};

function getName(){
    const name = inquirer.prompt({
        type: "input",
        message: "Tell me, what are your first and last names?",
        name: "name"
    });
    return name;
};