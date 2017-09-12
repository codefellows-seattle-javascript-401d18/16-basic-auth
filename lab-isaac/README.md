# Lab 16: CF-gram and Basic Auth

## About

This lab assignment is a Nodejs backend API app.  It takes http POST and GET calls to sign up a user and sign a user in.  The user database is MongoDB.  The two main urls are ```api/signup``` and ```api/signin```.  Jest is used for testing and a test sweet is dedicated to testing POST and GET calls.

## Installation

To install this app, you need to have Nodejs installed on your system.  MongoDB needs to also be installed and running on you system.  Clone this repo and navigate to ```16-basic-auth/lab-isaac``` and then ```npm install``` will install all necessary packages via npm. You must create a .env file in the lab-isaac folder setting the following variables:
```
MONGODB_URI= 'mongodb://localhost/*yourDBname*'
APP_SECRET='*A Specific secret word*'
PORT = **SPECIFY A PORT**
```

## Run Application

To run this application you have the following 3 options:  ```npm run start```, ```npm run start:watch```, or ```npm run start:debug```.
