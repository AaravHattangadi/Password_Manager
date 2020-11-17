var echo = require("node-echo");
var shell = require("shelljs");
const fs = require("fs");

function readCallback() {
  echo("Error in showing files. Please report to Author. He will help you fix");
}

process.chdir('Passwords')
echo(fs.readdirSync(process.cwd(), {withFileTypes: false}))
