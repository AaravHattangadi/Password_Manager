const fs = require("fs");
const inquirer = require("inquirer");
var echo = require("node-echo");
var shell = require("shelljs");
var NodeShell = require("nodeshell");
const { exec } = require("nodeshell");
const cp = require("child_process");

var CWD = __dirname;

inquirer
  .prompt(
	  [
    {
      type: "list",
      name: "Choose1",
      message: "What operation would you like to do?",
      choices: [
        "Add a new password",
        "List all saved passwords",
        "Read a specific password",
        "Delete all passwords (caution! this is irreversible)",
        "Delete a specific password (caution! this is irreversible)",
      ],
    },
  ]
  )
  .then(
	  (answers) => {
    console.log(answers);
    if (answers.Choose1 == "Add a new password") {
      shell.exec(`py exec1.py`);
    } else {
      if (answers.Choose1 == "List all saved passwords") {
        shell.exec("py exec2.py");
      } else {
        if (answers.Choose1 == "Read a specific password") {
          shell.exec("py exec3.py");
        } else {
          if (
            answers.Choose1 ==
            "Delete all passwords (caution! this is irreversible)"
          ) {
            shell.exec("py exec4.py");
          } else {
            if(answers.Choose1 == 'Delete a specific password (caution! this is irreversible)') {
              shell.exec("py exec5.py")
            }
          }
        }
      }
    }
  }
  );
