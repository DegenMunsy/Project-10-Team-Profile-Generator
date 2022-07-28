// Team member variables
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern.js')
const renderHTML = require("./src/renderHTML")
let team = [];

// Call inquirer 
const inquirer = require('inquirer');
const fs = require('fs');

// Prompt user for adding a manager
function managerInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the department manager's name?",
            name: 'name',
        },

        {
            type: 'input',
            message: 'ID:?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Email',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Office Number?',
            name: 'officeNumber',
        },
    ])
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            team.push(manager);
            console.log(manager)
            addEmployee()
        })
    }

// Prompt for adding an employee
const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Do you wish to add any other employees?',
            name: 'newEmployee',
            choices: ['intern', 'engineer', 'no other employees']
        }
    ]).then(response => {
        switch (response.newEmployee) {
            case "intern":
                internInfo()
                break;
            case "engineer":
                engineerInfo()
                break;
            case "no other employees":
                let teamData = renderHTML(team)
                fs.writeFile('./src/index.html', teamData, (err) =>
                    err ? console.log(err) : console.log('Team Profile Generated!')
                );
                break;
        }
    })
}

// Prompt for adding an intern 
let internInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'name',
        },

        {
            type: 'input',
            message: 'ID:?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Email',
            name: 'email',
        },
        {
            type: 'input',
            message: 'School?',
            name: 'school',
        },
    ])
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            team.push(intern);
            console.log(intern)
            addEmployee()
        })
}

// Prompt for adding an engineer
let engineerInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'name',
        },

        {
            type: 'input',
            message: 'ID:?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Email',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Github username?',
            name: 'github',
        },
    ])
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            team.push(engineer);
            console.log(engineer)
            addEmployee()
        })
}

// Start application
managerInfo()