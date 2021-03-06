# Documentation

## What this project does:
The final goal for this project is to create a mock version of instagram. And we're calling it CF gram. CF gram is an app that can let you sign up and sign in; create galleries, and then add images that belong to those galleries.

For right now, we're just creating the user and getting back the user....?

## Learning Objectives:
* We will be able to create basic authorization middleware.
* We will be able to test basic authorization for signup/signin routes.


## How another dev could 'get started' with my api on their own:
  - How do you clone this project?
      1. First click on the Fork button in the upper right hand corner to make a copy of my repository.
      2. That will automatically take you to your github. Then click on the green 'clone or download' button to copy the URL to your machines clipboard.
      3. In terminal navigate to wherever you want this clone to live, type 'git clone <this is where you paste the URL you just copied>', you should see a 'master' branch appear.
      4. Then type 'git checkout -b <branch name of your choosing> to create a fresh branch to work from.
  - How do you start using this project?
      1. You will need to have NodeJS installed on your machine.
      2. You will need to install httpie in one terminal window to test HTTP requests.
      3. Then start type nodemon or node server.js in a separate terminal window to get your server running.


# Mongo database steps:
1. Create db folder within data folder.
2. Upper left side terminal window (within lab-maddy folder)
```
npm run start:watch
```
3. Upper right window (within lab-maddy folder)
```
mongod --dbpath ./data/db
```
4. Lower right window (within lab-maddy folder)
```
mongo
```
5. Lower left window - POST, GET, PUT, DELETE requests

### To see what's in your database:
````
show database
````
### Show collections:
```
show collections
```
### To open the collection you're working with:
```
use cf-gram-dev
```
### To delete the data in the collection:
```
drop cd-gram-dev
```

## To test POST, GET, PUT and DELETE an object on the server, use these requests in terminal (we're able to do this with the http client superagent):


## Example POST(sign up) request:
```
http POST :3000/api/signup username=maddy password=1234 email=test@example.com
```

## Example GET(sign in) request:
```
http GET localhost:3000/api/signin/maddy1234
```

```
http -a user:pass :3000/api/signin
```


## Example PUT request:
```
```
Example:
```
```
Kept seeing this, which is not what I thought we were supposed to see:
```

```
Then I decided to do a GET request:
```
```

And saw this!!! Successful PUT!!!:
```

```

## Example DELETE request:
```
```




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
  - node server.js or just nodemon (to start a command line server) -
  - rs (restart, if needed)
  - ^C (control-C to stop node server)
  - npm install httpie (A command line HTTP client, to be able to test making http requests. An alternative is postman.)
  - npm install superagent (To be able to make http requests) -
  - npm install uuid (For creating unique user ids) -
  - npm install -D jest (To be able to run tests) -
    - npm test (To actually run the jest test)

### TESTS:
  - run run start:watch (This option won't tell what is wrong with your code) -
  - npm run start:debug - (Then attempt a POST and this option will tell you where you are wrong)
  - npm run debugger (Not sure what makes this one different or special yet...)-

### Not needed for every project:
  - npm install bluebird (sets this as a dependency in package.json) -

## General notes/changes made from previous projects:
- Created an index.js and set it as the start point in package.json.
- Created a .env file with the following:
```
MONGODB_URI='mongodb://localhost/cf-gram-dev'
APP_SECRET='superseekrettest'
PORT=4000
```

## Any resources that helped me complete this assignment:
-

# Collaborators:
Said. And sadly I had a doctors appointment this day, so I didn't get to collaborate in person.
