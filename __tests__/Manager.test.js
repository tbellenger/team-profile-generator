var Manager = require('../lib/Manager.js');

const emp = new Manager('Test', 1, 'test@example.com', '2603352');

test('Check employee role', () =>{
    expect(emp.getRole()).toBe('Manager');
})