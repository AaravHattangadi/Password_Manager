echo This will install all nodejs internal dependencies
echo using npm
echo This will take some time and will display lots of logs
echo Please do not panic
echo If you want to cancel, you have 10 seconds. Click the 'x' to
echo terminate this installler

sleep 10

call npm install -g inquirer
sleep 25
call npm install -g shelljs
sleep 25
call npm install -g nodeshell
sleep 25
call npm install -g node-echo
sleep 25
call npm install -g echo
