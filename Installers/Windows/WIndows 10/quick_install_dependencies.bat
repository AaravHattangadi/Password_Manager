@echo off

echo Due to limitations in the Python Installer, it will not auto-install like node.js
echo If you would like to customize your install of nodejs, please exit this cmd window.
echo You have 10 seconds to exit, after which it will start installing nodejs
echo The Python Installer will open up. You will have to manually install
echo Remember, it is VERY IMPORTANT that you check the box which says "Add to PATH"
echo The check box is located at the bottom
echo If you forget to do this, Password Manager will not work.
echo This script will now wait for 10 seconds if you want to exit.

timeout /t 10 /nobreak

msiexec /i "%CD\node-v15.2.1-x64.msi" /qn /norestart
start "Install Python" "%cd%\python-3.9.0.exe"
