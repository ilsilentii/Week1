var chalk = require("chalk");

var message = chalk.blue("this is ") + chalk.red("a test ") + chalk.green("on the functionality ") + chalk.yellow("of chalk");
console.log(message);