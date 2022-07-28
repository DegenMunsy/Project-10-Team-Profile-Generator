const Employee = require('../lib/Employee');
const employee = new Employee("John", "01", "Johntest@email.com", "3539")

test("test constructor values from manager object", () => {
    expect(employee.officeNumber).toBe("3539");
    
});

test("test the getRole() function", () => {
    expect(employee.getRole()).toBe("Manager")})

test("test the getOfficeNumber() function", () => {
    expect(employee.OfficeNumber()).toBe("3539")})