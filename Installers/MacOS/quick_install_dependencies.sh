echo This script will now wait for 10 seconds if you want to exit.

sleep 10

sudo installer -store -pkg "$(pwd)/node-v15.2.1.pkg" -target /
sudo installer -store pkg "$(pwd)/python-3.9.0-macosx10.9.pkg" -target /