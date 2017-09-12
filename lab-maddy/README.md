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

## To test POST, GET, PUT and DELETE an object on the server, use these requests in terminal (we're able to do this with the http client superagent):


## Example GET sign up:
```
http POST :3000/api/signup username=donnie password=orange email=test@example.com
```

## Example GET sign in:
```
http -a user:pass :3000/api/signin
```

### Example POST request:
Type or copy paste the following into terminal:
```
http POST :5000/api/toy name=barney desc='purple dino'
```

## Example POST response:
```

```

## Example GET request:
```
http GET :3000/api/toy/toy?_id= <copy whatever ID you get from the POST into the GET>????
```
Example:
```
http GET localhost:3000/api/toy?_id=99c0f97f-3ab0-484d-afc6-607733ee0e83
```
## Example GET response:
Should see:
```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Type: application/json
Date: Mon, 11 Sep 2017 01:37:08 GMT
Transfer-Encoding: chunked

{
    "_id": "99c0f97f-3ab0-484d-afc6-607733ee0e83",
    "desc": "purple dino",
    "name": "barney"
}

```

## Example PUT request: STILL NOT WORKING.
```
http PUT localhost:3000/api/toy?_id='sameID name=differentName desc=differentDesc'
```
Example:
```
http PUT localhost:3000/api/toy?_id='99c0f97f-3ab0-484d-afc6-607733ee0e83' name=maddy desc=human
```
Kept seeing this, which is not what I thought we were supposed to see:
```
HTTP/1.1 204 No Content
Connection: keep-alive
Content-Type: text/plain
Date: Mon, 11 Sep 2017 02:22:21 GMT
```
Then I decided to do a GET request:
```
http GET localhost:3000/api/toy?_id=99c0f97f-3ab0-484d-afc6-607733ee0e83
```

And saw this!!! Successful PUT!!!:
```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Type: application/json
Date: Mon, 11 Sep 2017 02:22:52 GMT
Transfer-Encoding: chunked

{
    "_id": "99c0f97f-3ab0-484d-afc6-607733ee0e83",
    "desc": "human",
    "name": "maddy"
}
```

## Example DELETE request:
```
http DELETE localhost:3000/api/toy?_id=99c0f97f-3ab0-484d-afc6-607733ee0e83
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
MONGODB_URI= 'mongodb://localhost/*yourDBname*'
APP_SECRET='*A Specific secret word*'
PORT = **SPECIFY A PORT**
```

## Any resources that helped me complete this assignment:
-

# Collaborators:
Said. And sadly I had a doctors appointment this day, so I didn't get to collaborate in person.
