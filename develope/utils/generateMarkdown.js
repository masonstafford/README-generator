function generateMarkdown(data) {

  const badge = () => {
    if (data.license !== "None") return `![license badge](https://img.shields.io/badge/license-${encodeURI(data.license)}-blueviolet?style=flat-square&logo=appveyor)`
    return ''

  }

  return `
  # ${data.title} 
  
  ${badge()}
  
 > ## ${data.description}
  
  
  ## Table of Contents
  
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)



## Installation

\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## License
#### *This project is licensed under the ${data.license} license.*

## Contributing
${data.contribute}

## Tests

#### To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions


![profile picture](${data.avatar_url})

If you have any questions please contact ${data.login} at their address ${data.emailAddress}

---
`;
}

module.exports = generateMarkdown;
