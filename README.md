# Deployment 

Implementing unit tests for the provided library. Aim is to get at least 60% coverage. Unit tests has been done by using mocha and chai.

Implementing a working GitHub Actions workflow consisting test repository, test runner and coverage reports (Coveralls).

## Setup

Initialize a new Node.js project:
- git init
- npm init -y

Install mocha and chai:
- npm install --save-dev mocha chai

Install c8:
- npm install --save-dev c8

Install coveralls:
- npm install --save-dev coveralls

Versions used:
- node v24.13.0
- chai 6.2.2
- mocha 11.7.5
- c8 11.0.0
- coveralls 3.1.1

## Tests

Here is the tests that has been done to this library:
- add.test.js
- camelCase.test.js
- chunk.test.js
- countBy.test.js
- difference.test.js
- drop.test.js
- isEmpty.test.js
- toFinite.test.js

There has been found three issues, which has been recorded to issues.

## GitHub Actions

Created file .github\workflows and there file test.yml.
That runs automatically tests and coverage to Coveralls.

## Coveralls

Coverage has been sent to Coveralls and has been succesfully got to goal of over 60%.

[![Coverage Status](https://coveralls.io/repos/github/henna003/Deployment/badge.svg?branch=main)](https://coveralls.io/github/henna003/Deployment?branch=main)




