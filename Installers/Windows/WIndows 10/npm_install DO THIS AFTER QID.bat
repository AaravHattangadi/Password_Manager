@echo off
echo This will install all nodejs internal dependencies
echo using npm
echo This will take some time and will display lots of logs
echo Please do not panic
echo If you want to cancel, you have 10 seconds. Click the 'x' to
echo terminate this installler

timeout /t 10 /nobreak

call npm install -g inquirer
timeout /t 25 /nobreak
call npm install -g shelljs
timeout /t 25 /nobreak
call npm install -g nodeshell
timeout /t 25 /nobreak
call npm install -g node-echo
timeout /t 25 /nobreak
call npm install -g echo
