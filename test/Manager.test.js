var Manager = require('../lib/Manager.js');

const emp = new Manager('Test', 1, 'test@example.com', '2603352');

test('Check manager', () =>{
    expect(emp.getRole()).toBe('Manager');
    expect(emp.getName()).toBe('Test');
    expect(emp.getId()).toBe(1);
    expect(emp.getEmail()).toBe('test@example.com');
    expect(emp.getOfficeNumber()).toBe('2603352');
})