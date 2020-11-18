const fs = require('fs');
const inquirer = require("inquirer");
var echo = require('node-echo');

echo("(If you have two accounts, DO NOT write the same name in this field! The first instance will be overwritten.")

inquirer
  .prompt([
    {
      type: "text",
      name: "WebsiteName",
      message: "What is the name of the website?",
      default: "",
    },
    {
      type: "text",
      name: "Username",
      message: "What is your username?",
      default: "",
    },
    {
      type: "password",
      name: "Password",
      message: "What is your password?",
      default: "",
      mask: '*',
    },
  ])
  .then((answers) => {
    var fileName = answers.WebsiteName;
    var webName = answers.WebsiteName;
    var userName = answers.Username;
    var passName = answers.Password;

    process.chdir('Passwords');
    fs.writeFileSync(`${fileName}`, `${webName} \n ${userName} \n ${passName}`);
    echo("Password Added!");
  });
