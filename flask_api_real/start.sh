#!/bin/bash

export FLASK_APP=app/main.py
export FLASK_ENV=development
pipenv run flask run
