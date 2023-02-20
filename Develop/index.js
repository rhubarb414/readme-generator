// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project",
  },
  {
    type: "input",
    name: "description",
    message: "Enter the description",
  },
  {
    type: "input",
    name: "ToC",
    message: "Add a table of contents - separate rows with '--'",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter info about installation - separate paragraphs with '--'",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter info about usage - separate paragraphs with '--'",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license:",
    choices: ["Apache 2.0", "GNU GPLv3", "ISC", "MIT", "none"],
  },
  {
    type: "input",
    name: "contributors",
    message: "Add contributors - separate contributors with '--'",
  },
  {
    type: "input",
    name: "test",
    message: "Add test info - separate paragraphs with '--'",
  },
  {
    type: "input",
    name: "contact",
    message: "Add your email for questions",
  },
];

//create README.md
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("README.md successfully created.")
  );
}

function init() {
  inquirer
    .prompt(questions)
    .then((responses) => {
      const readmeContent = generateMarkdown(responses);

      writeToFile("README.md", readmeContent);
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
