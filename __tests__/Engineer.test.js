const Employee = require('../lib/Employee');
const employee = new Employee("John", "01", "Johntest@email.com", "John01")

test("test constructor values from engineer object", () => {
    expect(employee.github).toBe("John01");
    
});

test("test the getRole() function", () => {
    expect(employee.getRole()).toBe("Engineer")})

test("test the getGithub() function", () => {
    expect(employee.getGithub()).toBe("John01")})