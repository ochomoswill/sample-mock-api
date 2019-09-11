const faker = require('faker');

// function to seed employers
function generateEmployers(count) {
    const employers = [];
    for (let id = 0; id < count; id++) {
        const companyName = faker.company.companyName();
        const companyCatchPhrase = faker.company.catchPhrase();
        const email = faker.internet.email();
        const phoneNo = faker.phone.phoneNumber();
        employers.push({
            "id": id,
            "company_name": companyName,
            "company_catch_phrase": companyCatchPhrase,
            "email": email,
            "phone_no": phoneNo,
        })
    }
    return {
        "domain": "Employers",
        "currentPage": 1,
        "pageSize": 10,
        "totalCount": employers.length,
        "nextPage": "page=2&pageSize=10",
        "records": employers
    }
}

module.exports = generateEmployers;