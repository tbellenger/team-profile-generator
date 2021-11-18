function generateHtml(employeeArray) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="header">My Team</div>
    <div class="row">
        <div class="col"></div>
        <div class="cards">
            ${generateCards(employeeArray)}
        </div>
        <div class="col"></div>
    </div>
</body>
</html>`
}

function generateCards(employeeArray) {
    let cards = '';
    employeeArray.forEach(item => {
        cards += generateCard(item);
    });
    return cards;
}

function generateCard(employee) {
    return `<div class="card">
    <div class="card-title">
        <div class="name">${employee.getName()}</div>
        ${addTitle(employee.getRole())}
        
    </div>
    <div class="card-content">
        <div class="card-element">
            ID: ${employee.getId()}
        </div>
        <div class="card-element">
            Email: <a href='mailto:${employee.getEmail()}'>${employee.getEmail()}</a>
        </div>
        ${addOther(employee)}
    </div>
</div>`
}

function addTitle(title) {
    if (title == 'Manager') {
        return `<div class="title"><i class="fa fa-mug-hot"></i> ${title}</div>`
    } else if (title == 'Engineer') {
        return `<div class="title"><i class="fa fa-glasses"></i> ${title}</div>`
    } else {
        return `<div class="title"><i class="fa fa-user-graduate"></i> ${title}</div>`
    }
}

function addOther(employee) {
    if (employee.getRole() == 'Manager') {
        return `<div class="card-element">
            Office number: ${employee.getOfficeNumber()}
        </div>`
    } else if (employee.getRole() == 'Engineer') {
        return `<div class="card-element">
            Github: <a href='https://github.com/${employee.getGithub()}' target='_blank'>${employee.getGithub()}</a>
        </div>`
    } else {
        return `<div class="card-element">
            School: ${employee.getSchool()}
        </div>`
    }
}

module.exports = generateHtml;