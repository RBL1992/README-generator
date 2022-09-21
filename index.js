const inquirer = require('inquirer')
const fileSystem = require('fs')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Tilte of Project',
            name: 'projectTitle',
        },
        {
            type: 'input',
            message: 'Project description',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please provide installation instructions',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please provide usage info if applicable',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please provide contributor information',
            name: 'contributors',
        },
        {
            type: 'input',
            message: 'Please provide testing info',
            name: 'testing',
        },
        {
            type: 'list',
            message: 'Choose a license for your project',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0'],
            name: 'license'
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username',
            name: 'GitHubUsername',
        },
        {
            type: 'input',
            message: 'Plase enter your email',
            name: 'email',
        },
    ])
    .then((answers) => {
        fs.writeFileSync('README.md', generateREADME(answers))
        console.log('README created!');
    })
    .catch((err) => console.error(err));

const generateREADME = ({ projectTitle, description, installation, usage, contributors, testing, license, GitHubUsername, email }) => {

    `
    <div id="top"></div>
    # ${projectTitle}
## Table of Contents
*[Project Description](#description)
*[Installation Instructions](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributors](#contributors)
*[Testing](#testing)
*[Questions](#questions)

## Description
${description}
<p align="right">(<a href="top">Back to Top</a>)</p>

## Installation
${installation}
<p align="right">(<a href="top">Back to Top</a>)</p>

## Usage
${usage}
<p align="right">(<a href="top">Back to Top</a>)</p>

## License
${(() => {
            switch (license) {
                case "MIT":
                    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
                    break;
                case "Apache 2.0":
                    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
                    break;
                case "GPL 3.0":
                    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
                    break;
            }
        })()
        }
<p align="right">(<a href="top">Back to Top</a>)</p>

## Contributors
${contributors}
<p align="right">(<a href="top">Back to Top</a>)</p>

## Testing
${testing}
<p align="right">(<a href="top">Back to Top</a>)</p>

## Questions

GitHub: [${GitHubUsername}](https://github.com${GitHubUsername})

Email: [${email}]

<p align="right">(<a href="top">Back to Top</a>)</p>
`}

