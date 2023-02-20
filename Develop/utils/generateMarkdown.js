// Generate license badge URL and call renderLicenseLink to return markdown
function renderLicenseBadge(licenseResponse) {
  if (licenseResponse === "none") {
    return "";
  } else {
    // Replace space with %20 url encoding
    const licenseEncoded = licenseResponse.replace(" ", "%20");
    const badgeURL = `https://img.shields.io/badge/License-${licenseEncoded}-green`;

    // Return markdown
    return renderLicenseLink(licenseResponse, badgeURL);
  }
}

// Generate markdown for license badge
function renderLicenseLink(licenseResponse, badgeURL) {
  return `[![${licenseResponse} license badge](${badgeURL}})](https://shields.io/)`;
}

// Generate markdown for license section
function renderLicenseSection(licenseResponse) {
  if (licenseResponse === "none") {
    return "";
  } else {
    const licenseMD = `## License
This project is under the ${licenseResponse} license. See documentation in repo.`;

    return licenseMD;
  }
}

// Generate table of contents
const renderToc = (data) => {
  const tocArray = [];

  // Populate tocArray with sections based on user response
  for (const section in data) {
    if (
      section === "title" || // Skip title
      section === "description" || // Skip description
      data[section] === "none" || // Handle a 'no license' response
      !data[section] // Skip sections that have no input
    ) {
    } else {
      // Capitalize first letter in each section name for ToC presentation
      const sectionTitleCased =
        section.charAt(0).toUpperCase() + section.slice(1);
      // Add section to tocArray
      tocArray.push(sectionTitleCased);
    }
  }
  tocArray.push("Questions"); // Add mandatory Questions section to tocArray

  // console.log(`tocArray = ${tocArray}`); //delete
  return generateTocLinks(tocArray);
};

const generateTocLinks = (tocArray) => {
  console.log("tocArray = " + tocArray); //delete
  console.log("tocArray[0] = " + typeof tocArray[0]); //del
  tocMarkdown = "";
  for (const section of tocArray) {
    console.log("section = " + section);
    sectionLowercase = section.toLowerCase();
    tocMarkdown += `[${section}](#${sectionLowercase})
    `;
  }
  return tocMarkdown;
};

// Return all content for README.md
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Description
${data.description}
  
## Table of Contents
${renderToc(data)}
  
## <a id="installation"></a>Installation
${data.installation}

## <a id="usage"></a>Usage
${data.usage}  
${renderLicenseSection(data.license)}
## <a id="contributors"></a>Contributors
${data.contributors}
  
## <a id="tests"></a>Tests
${data.test}
  
## <a id="questions"></a>Questions
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
