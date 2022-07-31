#!/bin/bash

# get the status of the repository.
cd /home/BunJs_In_Production/
state=$(git pull --dry-run 2>&1)

# get the pm2 installation status.
pm2_state=$(which pm2 2>&1)

# check the state of the repository.
if [$state == ""] # check the state of git pull is empty or not.
then
    echo "Not Want to be update!"
else
    echo "Update!"
    git pull # Update the repository.
    if [$pm2_state == ""] # check the state of the pm2 install empty or not.
    then
        echo "pm2 not install!"
        npm install -g pm2 # install pm2
        bun install # insall all bun dependency
        export PORT=3000 # assign env port
        pm2 start bun --name "bun_in_production" -- start
    else
        pm2 restart bun_in_production
    fi
fi

# We run this shell script by the use cron task.
# Task run at every minutes: * * * * *
