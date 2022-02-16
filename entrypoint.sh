#!/usr/bin/env bash

set -e
set -u
set -o pipefail

export CALIFICACIONES_CRUD_USER="$(aws ssm get-parameter --name /${PARAMETER_STORE}/calificaciones_mongo_crud/db/username --output text --query Parameter.Value)"
export CALIFICACIONES_CRUD_PASS="$(aws ssm get-parameter --with-decryption --name /${PARAMETER_STORE}/calificaciones_mongo_crud/db/password --output text --query Parameter.Value)"

exec node dist/main