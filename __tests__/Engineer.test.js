var Engineer = require('../lib/Engineer.js');

const emp = new Engineer('Test', 1, 'test@example.com', 'engGh');

test('Check engineer', () =>{
    expect(emp.getRole()).toBe('Engineer');
    expect(emp.getName()).toBe('Test');
    expect(emp.getId()).toBe(1);
    expect(emp.getEmail()).toBe('test@example.com');
    expect(emp.getGithub()).toBe('engGh');
})