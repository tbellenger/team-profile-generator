// Include packages needed for this application
const fs = require('fs');
const fsPromises = fs.promises;
const inq = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHtml');

// Create an array of questions for manager input
const managerPrompts = [
    {
        type:'input',
        message: "Please enter the team manager's name",
        name: 'name'
    },
    {
        type:'input',
        message:'Please enter the employee ID',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Please enter the employee email address:',
        name: 'email',
        validate: (email) => {
            // Regex mail check (return true if valid mail)
            if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)) {
                return true;
            } else {
                return 'You should enter a valid email address';
            }
        }
    },
    {
        type: 'input',
        message: 'Enter the manager office number',
        name: 'officeNumber'
    }
];

// general employee questions
const empPrompts = [
    {
        type:'input',
        message: 'Please enter the employee name',
        name: 'name'
    },
    {
        type:'input',
        message:'Please enter the employee ID',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Please enter the employee email address:',
        name: 'email',
        validate: (email) => {
            // Regex mail check (return true if valid mail)
            if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)) {
                return true;
            } else {
                return 'You should enter a valid email address';
            }
        }
    },
];

// engineer question
const engPrompts = [
    {
        type:'input',
        message:'Please enter the employee Github username',
        name: 'github'
    },
];

// intern question
const internPrompts = [
    {
        type:'input',
        message:'Please enter the employee school',
        name: 'school'
    },
];

// next employee question
const choicePrompt = [
    {
        type: 'list',
        name: 'nextEmployee',
        message: 'Add another team member',
        choices: ['Engineer', 'Intern', 'Finished']
    }
];

// A function to write HTML file
// const writeFile = data => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./dist/index.html', data, err => {
//             if (err) {
//                 reject(err);
//                 return;
//             }

//             resolve({
//                 ok: true,
//                 message: 'File Created'
//             });
//         });
//     });
// }

// A function to copy the CSS file
// const copyFile = () => {
//     return new Promise((resolve, reject) => {
//         fs.copyFile('./src/style.css', './dist/style.css', err => {
//             if (err) {
//                 reject({
//                     ok: false,
//                     message: 'Something went wrong!',
//                     err
//                 });
//                 return;
//             }
    
//             resolve({
//                 ok: true,
//                 message: 'Stylesheet created!'
//             });
//         });
//     });
// };

// Prompt to add a team member and ask if another should be added
async function promptTeam(team, type) {
    if (type == 'Finished') {
        // if no more then return the team array
        return team;
    } else {
        if (type == 'Intern') {
            // if adding an intern the ask intern questions 
            const member = await inq.prompt([...empPrompts, ...internPrompts, ...choicePrompt]);
            const { name, id, email, school } = member;
            const intern = new Intern(name, id, email, school);
            // add the intern to the array and prompt for next team member
            team.push(intern);
            return promptTeam(team, member.nextEmployee);
        } else {
            // if adding an engineer ask the engineer questions
            const member = await inq.prompt([...empPrompts, ...engPrompts, ...choicePrompt]);
            const { name, id, email, github } = member;
            const engineer = new Engineer(name, id, email, github);
            // add engineer to the array and prompt for next team member
            team.push(engineer);
            return promptTeam(team, member.nextEmployee);
        }
    }
}

// Create a function to initialize app
async function init() {
    try {
        // create output directories
        const dist = './dist';
        if (!fs.existsSync(dist)) {
            fs.mkdirSync(dist);
        }
        // ask manager questions
        const managerData = await inq.prompt([...managerPrompts, ...choicePrompt]);
        // create manager class here
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager(name, id, email, officeNumber);
        const team = [];
        // add manager to team array
        team.push(manager);
        // add rest of team to array
        const fullTeamData = await promptTeam(team, managerData.nextEmployee);
        // write the HTML and copy the CSS output to dist
        fsPromises.writeFile('./dist/index.html', generateHtml(fullTeamData));
        fsPromises.copyFile('./src/style.css', './dist/style.css')
        //await writeFile(generateHtml(fullTeamData));
        //await copyFile();
    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
