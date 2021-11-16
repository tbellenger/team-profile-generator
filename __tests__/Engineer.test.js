var Engineer = require('../lib/Engineer.js');

const emp = new Engineer('Test', 1, 'test@example.com', 'engGh');

test('Check employee role', () =>{
    expect(emp.getRole()).toBe('Engineer');
})