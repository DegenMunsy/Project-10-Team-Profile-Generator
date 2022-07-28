const Employee = require('../lib/Employee');
const employee = new Employee("John", "01", "Johntest@email.com")

test("test constructor values from employee object", () => {
    expect(employee.name).toBe("John")
    expect(employee.id).toBe('01');
    expect(employee.email).toBe('Johntest@email.com')
});


test("test the getName function/method", () => {
    expect(employee.getName()).toBe('John')
})

test('test the getId() function', () => {
    expect(employee.getId()).toBe('01')
})
test('test the getEmail() function', () => {
    expect(employee.getEmail()).toBe('Johntest@email.com')
})
test('test the getRole() function', () => {
    expect(employee.getRole()).toBe('Employee')
})

