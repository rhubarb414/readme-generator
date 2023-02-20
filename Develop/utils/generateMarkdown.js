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
    const licenseMD = `## <a id="license"></a>License
This project is under the ${licenseResponse} license. See documentation in repo.`;

    return licenseMD;
  }
}

function renderInstallationSection(installationResponse) {
  if (!installationResponse) {
    return "";
  } else {
    const installationMD = `## <a id="installation"></a>Installation
${installationResponse}`;

    return installationMD;
  }
}

function renderUsageSection(usageResponse) {
  if (!usageResponse) {
    return "";
  } else {
    const usageMD = `## <a id="usage"></a>Usage
${usageResponse}`;

    return usageMD;
  }
}

function renderContributorsSection(contributorsResponse) {
  if (!contributorsResponse) {
    return "";
  } else {
    const contributorsMD = `## <a id="contributors"></a>Contributors
${contributorsResponse}`;

    return contributorsMD;
  }
}

function renderTestsSection(testsResponse) {
  if (!testsResponse) {
    return "";
  } else {
    const testsMD = `## <a id="tests"></a>Tests
${testsResponse}`;

    return testsMD;
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

  return generateTocLinks(tocArray);
};

const generateTocLinks = (tocArray) => {
  tocMD = "";
  for (const section of tocArray) {
    console.log("section = " + section);
    sectionLowercase = section.toLowerCase();
    // Needs linebreak in template literal so each section is rendered in own row
    tocMD += `[${section}](#${sectionLowercase})

`;
  }
  return tocMD;
};

// Return all content for README.md
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Description
${data.description}
  
## Table of Contents
${renderToc(data)}
  
${renderInstallationSection(data.installation)}
${renderUsageSection(data.usage)}
${renderLicenseSection(data.license)}
${renderContributorsSection(data.contributors)}
${renderTestsSection(data.tests)}
  
## <a id="questions"></a>Questions
${data.contact}`;
}

module.exports = generateMarkdown;

// // Return all content for README.md
// function generateMarkdown(data) {
//   return `${renderLicenseBadge(data.license)}
// # ${data.title}

// ## Description
// ${data.description}

// ## Table of Contents
// ${renderToc(data)}

// ## <a id="installation"></a>Installation
// ${data.installation}

// ## <a id="usage"></a>Usage
// ${data.usage}
// ${renderLicenseSection(data.license)}
// ## <a id="contributors"></a>Contributors
// ${data.contributors}

// ## <a id="tests"></a>Tests
// ${data.tests}

// ## <a id="questions"></a>Questions
// ${data.contact}`;
// }
