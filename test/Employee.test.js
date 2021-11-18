var Employee = require('../lib/Employee.js');


describe('Employee', () => {
    describe('Check the role', () => {
        test('The role should be Employee', () => {
            const emp = new Employee('Test', 1, 'test@example.com');
            expect(emp.getRole()).toBe('Employee');
        })
    })
    describe('Check the name', () => {
        test('The name should be Test', () => {
            const emp = new Employee('Test', 1, 'test@example.com');
            expect(emp.getName()).toBe('Test');
        })
    })
    describe('Check the ID', () => {
        test('The ID should be 1', () => {
            const emp = new Employee('Test', 1, 'test@example.com');
            expect(emp.getId()).toBe(1);
        })
    })
    describe('Check the email', () => {
        test('The email should be test@example.com', () => {
            const emp = new Employee('Test', 1, 'test@example.com');
            expect(emp.getEmail()).toBe('test@example.com');
        })
    })
});