var Engineer = require('../lib/Engineer.js');

describe('Engineer', () => {
    describe('Check the role', () => {
        test('The role should be Engineer', () => {
            const emp = new Engineer('Test', 1, 'test@example.com', 'engGh');
            expect(emp.getRole()).toBe('Engineer');
        })
    })
    describe('Check the name', () => {
        test('The name should be Test', () => {
            const emp = new Engineer('Test', 1, 'test@example.com', 'engGh');
            expect(emp.getName()).toBe('Test');
        })
    })
    describe('Check the ID', () => {
        test('The ID should be 1', () => {
            const emp = new Engineer('Test', 1, 'test@example.com', 'engGh');
            expect(emp.getId()).toBe(1);
        })
    })
    describe('Check the email', () => {
        test('The email should be test@example.com', () => {
            const emp = new Engineer('Test', 1, 'test@example.com', 'engGh');
            expect(emp.getEmail()).toBe('test@example.com');
        })
    })
    describe('Check the github', () => {
        test('The github should be engGh', () => {
            const emp = new Engineer('Test', 1, 'test@example.com', 'engGh');
            expect(emp.getGithub()).toBe('engGh');
        })
    })
});