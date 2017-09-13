# Lab16-Isaiah

### Configuration
```md
  * \__test__ (folder: contains a lib/ folder(handles the jest setup, test-env, and mock ups) and routes/ folder(handles the basic auth tests))
  * lib (folder: contains basic-auth-middleware.js, error-handler.js, and server.js)
  * model (folder: contains user.js which houses the user schema)
  * route (folder: contains route-auth.js)
  * .gitignore
  * .eslintrc
  * .eslintignore
  * package.json
  * README.md (this file)
```

### Feature Tasks:
* Completed feature tasks. Majority, if not all, covered today in demo. Got server up and running with success for POST in command line. Need to run continue to dig through tests. Lab work requirements are as follows:

      ```md
          ## Feature Tasks
          * create the following directories to organize your code:
          * **lib**
          * **model**
          * **route**
          * **test**
          * create an HTTP server using `express`
          * using `mongoose`, create a **User** model with the following properties and options:
          * `username` - *required and unique*
          * `email` - *required and unique*
          * `password` - *required - this must be hashed and can not stored as plain text*
          * `findHash` - *unique*
          * use the **npm** `debug` module to log function calls that are used within your application
          * use the **express** `Router` to create a custom router for allowing users to **sign up** and **sign in**
          * use the **npm** `dotenv` module to house the following environment variables:
          * `PORT`
          * `MONGODB_URI`
          * `APP_SECRET` *(used for signing and verify tokens)*

          ## Server Endpoints
          ### `/api/signup`
          * `POST` request
          * the client should pass the username and password in the body of the request
          * the server should respond with a token (generated using `jwt` and `findHash`
            * the server should respond with **400 Bad Request** to a failed request

            ### `/api/signin`
            * `GET` request
            * the client should pass the username and password to the server using a `Basic:` authorization header
            * the server should respond with a token for authenticated users
            * the server should respond with **401 Unauthorized** for non-authenticated users

            ## Tests
            * create a test that will ensure that your API returns a status code of **404** for any routes that have not been registered
            * `/api/signup`
            * `POST` - test **400**, if no request body has been provided or the body is invalid
            * `POST` - test **200**, if the request body has been provided and is valid
            * `/api/signin`
            * `GET` - test **401**, if the user could not be authenticated
            * `GET` - test **200**, responds with token for a request with a valid basic authorization header
        ```
