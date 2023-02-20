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
    validate(value) {
      if (!value) {
        return "Title cannot be empty";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter the description - separate paragraphs with '--'",
    validate(value) {
      if (!value) {
        return "Description cannot be empty";
      } else {
        return true;
      }
    },
  },

  {
    type: "input",
    name: "installation",
    message:
      "(Optional) Enter info about installation - separate paragraphs with '--'",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter info about usage - separate paragraphs with '--'",
    validate(value) {
      if (!value) {
        return "Usage cannot be empty";
      } else {
        return true;
      }
    },
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
    message: "(Optional) Add contributors - separate contributors with '--'",
  },
  {
    type: "input",
    name: "tests",
    message: "(Optional) Add test info - separate paragraphs with '--'",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your github username",
    validate(value) {
      if (!value) {
        return "Username cannot be empty";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Add your email for questions",
    validate(value) {
      if (!value) {
        return "Email cannot be empty";
      } else {
        return true;
      }
    },
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
