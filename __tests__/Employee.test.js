var Employee = require('../lib/Employee.js');

const emp = new Employee('Test', 1, 'test@example.com');

test('Check employee role', () =>{
    expect(emp.getRole()).toBe('Employee');
})