#!/bin/bash

# get the status of the repository.
cd /home/BunJs_In_Production/
state=$(git pull --dry-run 2>&1)

# check the state of the repository.
if [$state == ""]
then
    echo "Not Want to be update!"
else
    echo "Update!"
    git pull # Update the repository.
fi

# We run this shell script by the use cron task.
# Task run at every minites: * * * * *
