const inquirer = require("inquirer")
const fs = require("fs")
const {getUser} = require('./utils/api.js')
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        message: "What is your email address? ",
        name: "emailAddress"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        message: "Give a brief description of your project.",
        name: "description",
    },
    {
        type: "list",
        name: "license",
        message: "What license should your project use?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be run to run tests? ",
        name: "test",
        default: "npm test"
    },
    {
        type: "input",
        message: "What does the user need to know about using this repo? ",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to this repo? ",
        name: "contribute"
    }
]
function init() {
    inquirer.prompt(questions).then(results => {
        getUser(results.github).then(({ data }) => {
            console.log(data)
            fs.writeFile('test.md', generateMarkdown({ ...data, ...results }), function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("All Done!!");
            });
        })
    });
}
init();
