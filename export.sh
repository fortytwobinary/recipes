#!/bin/bash
# This script exports the database configuration for local
# development. This API will be ultimately slated for Kubernetes
# and therefore ENV variables provide this configuration.

# REMEMBER to source this script not run it because remember the sub-shell
export DB_HOST='localhost'
export DB_USERNAME='root'
export DB_PASSWORD='DevPrince0706'
export DB_SCHEMA='recipes'

echo $DB_HOST
echo $DB_USERNAME
echo $DB_PASSWORD
echo $DB_SCHEMA \



