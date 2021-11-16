var Intern = require('../lib/Intern.js');

const emp = new Intern('Test', 1, 'test@example.com', 'UCB');

test('Check intern', () =>{
    expect(emp.getRole()).toBe('Intern');
    expect(emp.getName()).toBe('Test');
    expect(emp.getId()).toBe(1);
    expect(emp.getEmail()).toBe('test@example.com');
    expect(emp.getSchool()).toBe('UCB');
})