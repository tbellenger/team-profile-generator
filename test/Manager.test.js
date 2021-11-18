var Manager = require('../lib/Manager.js');

describe('Manager', () => {
    describe('Check the role', () => {
        test('The role should be Manager', () => {
            const emp = new Manager('Test', 1, 'test@example.com', '234');
            expect(emp.getRole()).toBe('Manager');
        })
    })
    describe('Check the name', () => {
        test('The name should be Test', () => {
            const emp = new Manager('Test', 1, 'test@example.com', '234');
            expect(emp.getName()).toBe('Test');
        })
    })
    describe('Check the ID', () => {
        test('The ID should be 1', () => {
            const emp = new Manager('Test', 1, 'test@example.com', '234');
            expect(emp.getId()).toBe(1);
        })
    })
    describe('Check the email', () => {
        test('The email should be test@example.com', () => {
            const emp = new Manager('Test', 1, 'test@example.com', '234');
            expect(emp.getEmail()).toBe('test@example.com');
        })
    })
    describe('Check the office number', () => {
        test('The office number should be 234', () => {
            const emp = new Manager('Test', 1, 'test@example.com', '234');
            expect(emp.getOfficeNumber()).toBe('234');
        })
    })
});