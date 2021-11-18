var Intern = require('../lib/Intern.js');

describe('Intern', () => {
    describe('Check the role', () => {
        test('The role should be Intern', () => {
            const emp = new Intern('Test', 1, 'test@example.com', 'UCB');
            expect(emp.getRole()).toBe('Intern');
        })
    })
    describe('Check the name', () => {
        test('The name should be Test', () => {
            const emp = new Intern('Test', 1, 'test@example.com', 'UCB');
            expect(emp.getName()).toBe('Test');
        })
    })
    describe('Check the ID', () => {
        test('The ID should be 1', () => {
            const emp = new Intern('Test', 1, 'test@example.com', 'UCB');
            expect(emp.getId()).toBe(1);
        })
    })
    describe('Check the email', () => {
        test('The email should be test@example.com', () => {
            const emp = new Intern('Test', 1, 'test@example.com', 'UCB');
            expect(emp.getEmail()).toBe('test@example.com');
        })
    })
    describe('Check the school', () => {
        test('The school should be UCB', () => {
            const emp = new Intern('Test', 1, 'test@example.com', 'UCB');
            expect(emp.getSchool()).toBe('UCB');
        })
    })
});