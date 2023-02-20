//Generate license badge URL and call renderLicenseLink to return markdown
function renderLicenseBadge(licenseResponse) {
  if (licenseResponse === "none") {
    return "";
  } else {
    //replace space with %20 url encoding
    const licenseEncoded = licenseResponse.replace(" ", "%20");
    const badgeURL = `https://img.shields.io/badge/License-${licenseEncoded}-green`;

    //return markdown
    return renderLicenseLink(licenseResponse, badgeURL);
  }
}

//Generate markdown for license badge
function renderLicenseLink(licenseResponse, badgeURL) {
  return `[![${licenseResponse} license badge](${badgeURL}})](https://shields.io/)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseResponse) {
  if (licenseResponse === "none") {
    return "";
  } else {
    const licenseMD = `## License
This project is under the ${licenseResponse} license. See documentation in repo.`;

    return licenseMD;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Description
${data.description}
  
## Table of Contents
${data.ToC}
  
## Installation
${data.installation}

## Usage
${data.usage}  
${renderLicenseSection(data.license)}
## Contributors
${data.contributors}
  
## Tests
${data.test}
  
## Contact
${data.contact}`;
}

module.exports = generateMarkdown;

// [![${data.license} license badge](${renderLicenseBadge(
//   data.license
// )})](https://shields.io/)
