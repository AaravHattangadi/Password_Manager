const fs = require('fs');
const inquirer = require("inquirer");
var echo = require('node-echo');

inquirer
  .prompt([
    {
      type: "text",
      name: "LookupName",
      message: "Enter lookup value (case-sensitive)",
      default: "",
    },
  ])
  .then((answers) => {
    var lookupName = answers.LookupName

    process.chdir('Passwords');
    var readFileVar = fs.readFileSync(`${lookupName}`, 'utf-8');
    echo(`${readFileVar}`)
  });