const chalk = require('chalk');
const jsonServer = require('json-server');
const generateMockDatabase = require('./generateMockDatabase');

// Get the mock db object
const db = generateMockDatabase();

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3045;

server.use(middlewares);
server.use(router);
server.listen(port);


// Output on the console on npm start
const host = `http://localhost:${port}`;

console.log("\n");
console.log(chalk.bold.underline.blue("Sample Mock API"));
console.log("\n");
console.log(chalk.bold(`Mock API running on ${chalk.underline(host)}\n`));
console.log(chalk.bold("Endpoints available are below: "));
Object.keys(db).map((endpoint)=>{
    console.log(`=> ${chalk.underline(`${host}/${endpoint}`)}`);
});
console.log("\n");