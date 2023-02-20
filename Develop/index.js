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
    type: "input",
    name: "license",
    message: "Enter license info",
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((responses) => generateMarkdown(responses))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
