var Employee = require('../lib/Employee.js');

const emp = new Employee('Test', 1, 'test@example.com');

test('Check employee', () =>{
    expect(emp.getRole()).toBe('Employee');
    expect(emp.getName()).toBe('Test');
    expect(emp.getId()).toBe(1);
    expect(emp.getEmail()).toBe('test@example.com');
})