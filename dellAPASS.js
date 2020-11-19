const inquirer = require('inquirer');
const Shell = require('nodeshell');
const { echo } = require('shelljs');

const fs = require('fs').promises;

const directory = 'Passwords';

let cdt = new Date(); 



inquirer
.prompt(
  [{
    type: "confirm",
    name: "DelConf",
    message: "Are you sure you want do delete ALL YOUR PASSWORDS?",
  }
  ]
  )
.then(
  (answers) => {
    if(answers.DelConf == true) {
      fs.rmdir(directory, { recursive: true })
      .then(() => echo('All Passwords Deleted; Please go to '));
    } else {
      fs.appendFile('errors.log',`${cdt}: 0x736_USR_CONF_ERR >> dellAPASS.js`)
      echo('0x736_USR_CONF_ERR');
      
    }
  }
)