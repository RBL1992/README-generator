const inquirer = require('inquirer');
const fs = require('fs');

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
            choices: ['GNU AGPL v3', "GNU GPL v3", "GNU LGPL v3","Mozilla Public License 2.0","Apache License 2.0","The MIT License","Boost Software License 1.0","The Unlicense"],
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
        fs.writeFileSync('generatedREADME.md', generateREADME(answers))
        console.log('README created!');
    })
    .catch((err) => console.error(err));

const generateREADME = ({ projectTitle, description, installation, usage, contributors, testing, license, GitHubUsername, email }) => {
    return `
# ${projectTitle} 

## Table of Contents
* [Project Description](#description)

* [Installation Instructions](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributors](#contributors)

* [Testing](#testing)

* [Questions](#questions)

## Description
${description}


## Installation
${installation}


## Usage
${usage}


## License
${(() => {
            switch (license) {
                case "GNU AGPL v3":
                    return `(https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`;
                case "GNU GPL v3":
                    return `(https://img.shields.io/badge/License-GPLv3-blue.svg)`;
                case "GNU LGPL v3":
                    return `(https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
                case "Mozilla Public License 2.0":
                    return `(https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
                case "Apache License 2.0":
                    return `(https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
                case "The MIT License":
                    return `(https://img.shields.io/badge/License-MIT-yellow.svg)`;
                case "Boost Software License 1.0":
                    return `(https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
                case "The Unlicense":
                    return `(https://img.shields.io/badge/license-Unlicense-blue.svg)`;
                default:
                    return;
            }
        })()
        }


## Contributors
${contributors}


## Testing
${testing}


## Questions

* [GitHub](https://github.com/${GitHubUsername})

* [Email](mailto:${email})


`}

