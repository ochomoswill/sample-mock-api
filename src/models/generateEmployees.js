const faker = require('faker');

// function to seed employees
function generateEmployees(count) {
    const employees = [];
    for (let id = 0; id < count; id++) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email();
        employees.push({
            "id": id,
            "first_name": firstName,
            "last_name": lastName,
            "email": email
        })
    }
    return {
        "domain": "Employees",
        "currentPage": 1,
        "pageSize": 10,
        "totalCount": employees.length,
        "nextPage": "page=2&pageSize=10",
        "records": employees

    }
}

module.exports = generateEmployees;