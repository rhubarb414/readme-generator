// ~~~
// vvv ~ Begin license setion ~ vvv
// ~~~

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

// ~~~
// ^^^ ~ End license setion ~ ^^^
// ~~~

// ~~~
// vvv ~ Begin markdown generation section for individual sections ~ vvv
// ~~~

// Generate license section
function renderLicenseSection(licenseResponse) {
  if (licenseResponse === "none") {
    return "";
  } else {
    const licenseMD = `## <a id="license"></a>License
This project is under the ${licenseResponse} license. See documentation in repo.`;

    return licenseMD;
  }
}
// Generate installation section
function renderInstallationSection(installationResponse) {
  if (!installationResponse) {
    return "";
  } else {
    const installationPgraphs = installationResponse.split("--");
    let installationMD = `## <a id="installation"></a>Installation
  `;

    for (const pgraph of installationPgraphs) {
      // Needs linebreak in template literal so each pgraph is rendered in own row
      installationMD += `${pgraph}
  
  `;
    }
    return installationMD;
  }
}

// Generate usage section
function renderUsageSection(usageResponse) {
  if (!usageResponse) {
    return "";
  } else {
    const usagePgraphs = usageResponse.split("--");
    let usageMD = `## <a id="usage"></a>Usage
  `;

    for (const pgraph of usagePgraphs) {
      // Needs linebreak in template literal so each pgraph is rendered in own row
      usageMD += `${pgraph}
  
  `;
    }
    return usageMD;
  }
}
// Generate contributors section
function renderContributorsSection(contributorsResponse) {
  if (!contributorsResponse) {
    return "";
  } else {
    const contributorPgraphs = contributorsResponse.split("--");
    let contributorsMD = `## <a id='contributors'></a>Contributors
  `;

    for (const pgraph of contributorPgraphs) {
      // Needs linebreak in template literal so each pgraph is rendered in own row
      contributorsMD += `${pgraph}
  
  `;
    }
    return contributorsMD;
  }
}

// Generate tests section
function renderTestsSection(testsResponse) {
  if (!testsResponse) {
    return "";
  } else {
    const testsPgraphs = testsResponse.split("--");
    let testsMD = `## <a id="tests"></a>Tests
  `;

    for (const pgraph of testsPgraphs) {
      // Needs linebreak in template literal so each pgraph is rendered in own row
      testsMD += `${pgraph}
  
  `;
    }
    return testsMD;
  }
}

// ~~~
// ^^^ ~ End markdown generation section for individual secions ~ ^^^
// ~~~

// ~~~
// vvv ~ Begin table of contents setion ~ vvv
// ~~~

// Generate table of contents
const renderToc = (data) => {
  const tocArray = [];

  // Populate tocArray with sections based on user response
  for (const section in data) {
    if (
      section === "title" || // Skip title
      section === "description" || // Skip description
      section === "github" || // Don't add github to ToC
      section === "email" || // Don't add email to ToC
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
  let tocMD = "";
  for (const section of tocArray) {
    sectionLowercase = section.toLowerCase();
    // Needs linebreak in template literal so each section is rendered in own row
    tocMD += `- [${section}](#${sectionLowercase})

`;
  }
  return tocMD;
};

// ~~~
// ^^^ ~ End table of contents setion ~ ^^^
// ~~~

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
${data.email}`;
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
