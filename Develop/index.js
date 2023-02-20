// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

console.log(process.argv);
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
    message: "Add a table of contents",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter info about installation",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter info about usage",
  },
  {
    type: "input",
    name: "license",
    message: "Enter license info",
  },
  {
    type: "input",
    name: "contributors",
    message: "Add contributors",
  },
  {
    type: "input",
    name: "test",
    message: "Add test info",
  },
  {
    type: "input",
    name: "contact",
    message: "Add contact info for questions",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
