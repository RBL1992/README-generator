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
        message: 'Project description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide testing info',
        name: 'testing',
    },
    {
        type: 'list',
        message: 'Choose a license for your project',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
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
.then((response)=> {

})

