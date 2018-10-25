#!/bin/bash

read -p "invoker: " invoker 
read -p "command: "  command

sed -i s/"scripts": {/"scripts": {\n    "'"$invoker"'": "'"$command"'",/ package.json;
