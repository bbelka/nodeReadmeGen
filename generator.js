const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const axios = require('axios');
const questions = [{
    type: 'input',
    message: 'What is your name?',
    name: 'name'
},
{
    type: 'input',
    message: 'What is your github username?',
    name: 'github'
},
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
},
{
    type: 'input',
    message: 'Please describe your project.',
    name: 'description'
},
{
    type: 'input',
    message: 'Please give any installation instructions.',
    name: 'installation'
},
{
    type: 'input',
    message: 'Please give usage instructions.',
    name: 'usage'
},
{
    type: 'input',
    message: 'Is there any pertinent licensing instructions?',
    name: 'license'
},
{
    type: 'input',
    message: 'List all contributors.',
    name: 'cotrib'
},
{
    type: 'input',
    message: 'Provide any information on testing.',
    name: 'test'
},
];

const writeFileAsync = util.promisify(fs.writeFile);

inquirer
    .prompt(questions)
    .then(function (answers) {
        
        const queryUrl = `https://api.github.com/users/${github}`;
        axios.get(queryUrl)
    })
    .then(function (results) {
        const avatar = results.data.avatar_url;
        const email = results.data.email;
    })
    .then(function() {
        
        return writeFileAsync${}
    })



 

function generateMD() {
    return `
 # ${response.title}  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)


## Description
${response.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributors](#contributors)
5. [Tests](#tests)
6. [Contact](#contact)

<a name="installation"></a>

## Installation
${response.installation}

<a name="usage"></a>

## Usage
${response.usage}

<a name="license"></a>

## License
${response.license}

<a name="contributors"></a>

## Contributors
${response.contrib}

<a name="tests"></a>

## Tests
${response.test}`
};

function generateContact(){
    return `

<a name="contact"></a>

## Contact
![alt text](${avatar})
[Email me @ ${email}](mailto:${email})`
};

