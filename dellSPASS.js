const fs = require('fs');
const inquirer = require("inquirer");
const { echo } = require('shelljs');

inquirer
  .prompt([
    {
      type: "text",
      name: "LookupName",
      message: "Enter name of website whose password you want to delete. This process cannot be reversed",
      default: "",
    },
  ])
  .then((answers) => {
    var lookupName = answers.LookupName

    if(fs.)
    process.chdir('Passwords');
    fs.unlink(`${lookupName}.apn`, function (err) {
        if (err) throw err;
        //
        echo(`${answers.lookupName} has succesfully been deleted.`)
    })
  });