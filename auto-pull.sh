#!/bin/bash

# get the status of the repository.
cd /home/BunJs_In_Production/
state=$(git pull --dry-run 2>&1)

# get the pm2 installation status.
pm2_state=$(which pm2 2>&1)

# check the state of the repository.
if [$state == ""]
then
    echo "Not Want to be update!"
else
    echo "Update!"
    git pull # Update the repository.
    if [$pm2_state == ""]
    then
        echo "pm2 not install!"
        npm install -g pm2
        pm2 start bun --name "bun_in_production" -- start
    else
        pm2 restart bun_in_production
    fi
fi

# We run this shell script by the use cron task.
# Task run at every minutes: * * * * *
