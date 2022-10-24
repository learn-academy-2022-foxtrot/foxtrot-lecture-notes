# External API 

# API Application Program Interface
  - Is an interface that is designed to be worked with by OTHER PROGRAMS
  - Is super helpful for devs to share data from around the Internet. 

  - it is NOT a UI // User Interface 
    - Is an interface that is designed to be worked with by humans or human like beings 
  - It helps us make really cool UI's by populating data for our users

## JSON
  - Standard for sending Data over the Internet. 
  - Keys are always strings 
  - JSON is always a collection of key value pairs 
  - JSON IS NOT A JAVASCRIPT OBJECT 
    - its a string
  
## Fetch 
  - is a JavaScript tool (built in method) for making requests to other computers or servers 
  - Fetch uses HTTP Verbs and URL's to make the request
    - Fetch defaults to the GET verb
    - Fetch's first argument is the url passed in as a string

## Promises 
  - ways to handle data asynchronously 
  - Promises ARE JS objects
  - Status in one of three states, 
    - PromiseState: Pending
    - PromiseState: Rejected 
    - PromiseState: Fulfilled 
  - Fetch makes use of promises
  - Access Promises 
    ```javascript
    .then()
    ```
    - .then is a HOF and takes a function as an argument
    - .then(()=>{})
  - .catch() allows us to catch and log errors 

# Hiding an API Key
- create a file called .env at the root level of your app
- add the file to your .gitignore
- In the ENV file give it a variable name prefixed with REACT_APP_...

call on the env variable in your application by using
  ` process.env.REACT_APP_...`

 