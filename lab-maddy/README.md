# Documentation

## What this project does:
The goal of this project is to create a mock of instagram. And we're calling it cf gram- an app that can let you sign up and sign in, create galleries, and then images that belong to those galleries.

## Learning Objectives:
* We will be able to create basic authorization middleware.
* We will be able to test basic authorization for signup/signin routes.

# Packages and commands to remember:
## New packages (introduced for this project):
- npm install jsonwebtoken (Tor jwt (JSON web tokens); this is what makes it possible for us to create user tokens)- DONE
- npm i bcrypt (For hashing user passwords) - DONE
- npm install dotenv (This is for ) - DONE

## For Mongo:
- npm install mongodb into your project directory (To install Mongo) -
- mongod (To start the MongoDB process)
- mongo (To start the MongoDB shell-- )

## For Mongoose:
- npm install mongoose (To install mongoose) -

## General:
  - In package.json's scripts, add- "start:debug": "DEBUG=http* nodemon server.js",
  - npm install express -
  - npm i or npm install (For node modules) - DONE
### HTTP requests:
  - npm install httpie (A command line HTTP client, to be able to test making http requests. An alternative is postman.)
  - npm install superagent (To be able to make http requests) -
  - npm install uuid (For creating unique user ids) -
  - npm install -D jest (To be able to run tests) -
    - npm test (To actually run the jest test)
### TESTS:
  - node server.js or just nodemon (to start a command line server) -
    - rs (restart, if needed)
    - ^C (control-C to stop node server)
  - run start: watch -
  - npm run start:debug - (Then attempt a POST and this will tell you where you're wrong)
  - npm run debugger -

### Not needed for every project:
  - npm install bluebird (sets this as a dependency in package.json) -

## Notes:
- created an index.js and set it as the start point in package.json
- deleted parse-url.json and ________
- added a cors.js file

# Collaborators:
