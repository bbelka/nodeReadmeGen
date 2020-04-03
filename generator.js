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
const appendFileAsync = util.promisify(fs.appendFile);

function promptUser() {
    return inquirer.prompt([
        {
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
    ])
};

promptUser()
    .then(function (answers) {
        const md = generateMD(answers);
        console.log(answers)
        writeFileAsync("READMEgen.md", md);
        axios.get(
            `https://api.github.com/users/${answers.github}`
        ).then(function (results) {
            console.log(results);
            const appendMD = appendContact(results)
            appendFileAsync("READMEgen.md", appendMD)
        })
    })
    .catch(function (err) {
        console.log(err);
    });

function generateMD(answers) {
    return `
 # ${answers.title}  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)


## Description
${answers.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributors](#contributors)
5. [Tests](#tests)
6. [Contact](#contact)

<a name="installation"></a>

## Installation
${answers.installation}

<a name="usage"></a>

## Usage
${answers.usage}

<a name="license"></a>

## License
${answers.license}

<a name="contributors"></a>

## Contributors
${answers.contrib}

<a name="tests"></a>

## Tests
${answers.test}`
};

function appendContact(results) {
    return `

<a name="contact"></a>

## Contact
![alt text](${results.data.avatar_url})
[Email me @ ${results.data.email}](mailto:${results.data.email})`
};