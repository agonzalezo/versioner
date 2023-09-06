#!/bin/bash
if [[ -f ../.env ]]
then
    echo "Mapping env vars to yml file"
    export $(cat ../.env | xargs)
    envsubst < 01-Service.yml > deployable.yml.tmp
    echo -e "\n---\n" >> deployable.yml.tmp
    envsubst < 11-Deployment.yml >> deployable.yml.tmp
    echo "Done.."
elif [[ -n "$API_NAME" ]]
then
    echo "Mapping env vars to yml file"
    envsubst < 01-Service.yml > deployable.yml.tmp
    echo -e "\n---\n" >> deployable.yml.tmp
    envsubst < 11-Deployment.yml >> deployable.yml.tmp
    echo "Done.."
fi