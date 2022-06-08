// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
const path = require('path');
const generateMarkdown = require('./utilities/generate-markdown');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },

      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
   { 
     type: 'input',
     name: 'application repository name',
     message: 'What is the name of your repo?',

},
   { 
     type: 'input',
     name: 'title',
     message: 'What is the title of your project?',

    

},

{  
type: 'input',
name: 'description',
message: 'Please write a short description of your project',

    

},

{  
    type: 'input',
    name: 'installation-Instructions',
    message: 'Please explain the installation process',
    
        
    
    },

    {  
        type: 'input',
        name: 'usage-info',
        message: 'Please provide relevant usage information',
        
            
        
        },

        {  
            type: 'input',
            name: 'test',
            message: 'Describe the test process',

        },
        
        {
                type: 'input',
                name: 'contributing',
                message: 'What does the user need to know about contributing to the repo?',
              },
            
                
            
            

            {
                type: 'list',
                name: 'license',
                message: 'What kind of license should your project have?',
                choices: ['Apache License 2.0', 'BSD-3','BSD-2','GPL','LGPL','MIT','MPL-2.0','CDDL-1.0','EPL-2.0', 'None'],
              },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating README...');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
  }

// Function call to initialize app
init();
