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

//Generate markdown for license section
function renderLicenseSection(licenseResponse) {
  if (licenseResponse === "none") {
    return "";
  } else {
    const licenseMD = `## License
This project is under the ${licenseResponse} license. See documentation in repo.`;

    return licenseMD;
  }
}

//Generate table of contents
const renderToc = (data) => {
  const tocArray = [];

  //populate tocArray with sections based on user response
  for (const section in data) {
    if (
      section === "title" || //skip title
      section === "description" || //skip description
      data[section] === "none" || //handle a 'no license' response
      !data[section] //don't add sections that have no input
    ) {
    } else {
      //Capitalize first letter in each section name for ToC presentation
      const sectionTitleCased =
        section.charAt(0).toUpperCase() + section.slice(1);
      tocArray.push(sectionTitleCased);
    }
  }
  tocArray.push("Questions"); //add mandatory Questions section to tocArray

  console.log(`tocArray = ${tocArray}`); //delete
  return tocArray;
};

const generateTocLinks = (tocArray) => {};

//Return all content for README.md
function generateMarkdown(data) {
  renderToc(data); //delete

  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Description
${data.description}
  
## Table of Contents
  
## Installation
${data.installation}

## Usage
${data.usage}  
${renderLicenseSection(data.license)}
## Contributors
${data.contributors}
  
## Tests
${data.test}
  
## Questions
${data.contact}`;
}

module.exports = generateMarkdown;

// console.log("is this a string already? " + section);
// const sectionString = section.toString();

//generate ToC using object destructuring
//  const { installation, usage, license, contributors, test } = data;
// if (installation) {
//   tocArray.push("Installation");
// }
// if (usage) {
//   tocArray.push("Usage");
// }
// if (license !== "none") {
//   tocArray.push("License");
// }
// if (contributors) {
//   tocArray.push("Contributors");
// }
// if (test) {
//   tocArray.push("Tests");
// }
