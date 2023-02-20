// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseResponse) {
  const licenseEncoded = licenseResponse.replace(" ", "%20");
  const badgeURL = `https://img.shields.io/badge/License-${licenseEncoded}-green`;
  return badgeURL;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `[![${data.license} license badge](${renderLicenseBadge(
    data.license
  )})](https://shields.io/)

# ${data.title}

## Description
${data.description}
  
## Table of Contents
${data.ToC}
  
## Installation
${data.installation}

## Usage
${data.usage}  

## License
${data.license} 
  
## Contributors
${data.contributors}
  
## Tests
${data.test}
  
## Contact
${data.contact}`;
}

module.exports = generateMarkdown;
