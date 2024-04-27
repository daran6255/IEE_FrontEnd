#!/bin/bash

if [ "$EUID" -ne 0 ]
then
    echo "Please use sudo -E to run this script"
    exit 1
fi

curr_dir=$PWD

# Install nodejs
if ! command -v node &> /dev/null
then
    cd ~
    curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt-get install nodejs -y
fi

cd $curr_dir

# Install prerequisites
npm install yarn pm2 -g

# Build project
yarn install --omit=dev
yarn run build

# Run server
pm2 start app.config.json