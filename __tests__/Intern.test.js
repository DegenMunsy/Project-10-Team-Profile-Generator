const Employee = require('../lib/Employee');
const employee = new Employee("John", "01", "Johntest@email.com", "UofT")

test("test constructor values from engineer object", () => {
    expect(employee.school).toBe("UofT");
    
});

test("test the getRole() function", () => {
    expect(employee.getRole()).toBe("Intern")})

test("test the getSchool() function", () => {
    expect(employee.School()).toBe("UofT")})