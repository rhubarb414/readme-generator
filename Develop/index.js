// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  "Enter the title of your project",
  "Enter the description",
  "Add a table of contents",
  "Enter info about insallation",
  "Enter info about usage",
  "Enter license info",
  "Add contributors",
  "Enter test info",
  "Add contact info for questions",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
