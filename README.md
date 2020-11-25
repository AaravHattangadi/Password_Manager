
# Password Manager

An attempt at making a Password Manager in Node.js

Warning: I am making this just for fun! This is  **NOT**  Secure

# Dependencies

	 - NodeJS (bundled)
	 - Python 3.9.0 (bundled)
	 - NPM Packages:
	   - Inquirer
	   - NodeShell
	   - shelljs
	   - echo
	   - node-echo
	   
# Installation
## Dependencies:
> You can either manually install, or install using the quick installers provided in the installer folder :)
> Run the quick_install_dependencies first, and then npm_install after :)

### For Installing NodeJS

#### MacOS
  - Run the provided installer
        
#### Linux
  - Open `bash` or `terminal`
  - Run the command `sudo apt install nodejs`
        
#### Windows
  - Run the provided installer

### For Installing Python
#### MacOS 
- Run the provided installer

#### Linux
 - Open `bash`or `terminal`
 - Run the command `sudo apt install pythonpy`
        
#### Windows
- Run the provided installer

    

### For Installing the NPM Packages

#### MacOS, Windows and Linux
- MacOs Users — Open the terminal, Linux users — Open bash, Windows users — Open Powershell (Win 10) or CMD (Win 7)
- Run the following commands to install all dependencies

  `npm install -g inquirer`
  then
  `npm install -g shelljs`
  then 
  `npm install -g nodeshell`
  then
  `npm install -g node-echo`
  then
  `npm install -g echo`

 ## To install Password_Manager
 Copy the entire directory for your specific operating system and paste it into any directory which does not require elevated privellages and does not have any spaces. 
 <br>
 Windows Example: Install it in D:\Password_Manager instead of C:\Program Files (x86)\Password Manager
>
 Mac Example: Install it in ~/Password_Manager instead of /Applications

 Linux Examples: It is best to install it in ~/Password_Manager

Add the install directory to your `PATH Environment Variable`
 
 # Using Password Manager
 1.  To add a password
	 1. Open `terminal` or `bash` or `powershell` or `cmd`
	 2. If you have added it to your PATH, run `node addPass.js`
	 3. If you have not, `cd` to your install directory and then run `node addPass.js`
	 
 2.  To delete a password
	 1. Open `terminal` or `bash` or `powershell` or `cmd`
	 2.  Added to path — `node dellSPASS.js`
	 3. Not added to path — `cd` to install directory then `node dellSPASS.js`
 3.   To delete all passwords
 4.  To list all passwords
 5.  To read a password
