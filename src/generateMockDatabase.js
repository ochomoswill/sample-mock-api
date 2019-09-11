const generateEmployees = require('./models/generateEmployees');
const generateEmployers = require('./models/generateEmployers');


// function that returns the mock data store
function generateMockDatabase(){
    return {
        employers: generateEmployers(8),
        employees: generateEmployees(25)
    };
}

// export must be a function
module.exports = generateMockDatabase;