const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const answers = [{
    type: 'input',
    message: 'What is your name?',
    name: 'name'
},
{
    type: 'input',
    message: 'What is your gihub username?',
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

buildBio();
const buildBio = async (answers => {
        const response = await inquirer.prompt(answers)
        const docContent =

        await writeFileAsync(
            `${response.name}.html`,
            docContent,
            `utf8`
        );

    } catch (err) {
        return console.log(err);
    }

});

