var Intern = require('../lib/Intern.js');

const emp = new Intern('Test', 1, 'test@example.com', 'UCB');

test('Check employee role', () =>{
    expect(emp.getRole()).toBe('Intern');
})