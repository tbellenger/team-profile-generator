// Include packages needed for this application
const fs = require('fs');
const inq = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHtml');

// Create an array of questions for user input
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

const engPrompts = [
    {
        type:'input',
        message:'Please enter the employee Github username',
        name: 'github'
    },
];

const internPrompts = [
    {
        type:'input',
        message:'Please enter the employee school',
        name: 'school'
    },
];

const choicePrompt = [
    {
        type: 'list',
        name: 'nextEmployee',
        message: 'Add another team member',
        choices: ['Engineer', 'Intern', 'Finished']
    }
];

// Create a function to write README file
const writeFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Created'
            });
        });
    });
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject({
                    ok: false,
                    message: 'Something went wrong!',
                    err
                });
                return;
            }
    
            resolve({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
};

async function promptTeam(team, type) {
    if (type == 'Finished') {
        return team;
    } else {
        if (type == 'Intern') {
            const member = await inq.prompt([...empPrompts, ...internPrompts, ...choicePrompt]);
            const { name, id, email, school } = member;
            console.log(member);
            const intern = new Intern(name, id, email, school);
            team.push(intern);
            return promptTeam(team, member.nextEmployee);
        } else {
            const member = await inq.prompt([...empPrompts, ...engPrompts, ...choicePrompt]);
            const { name, id, email, github } = member;
            console.log(member);
            const engineer = new Engineer(name, id, email, github);
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
        // write the HTML and CSS output to dist
        await writeFile(generateHtml(fullTeamData));
        await copyFile();
    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
