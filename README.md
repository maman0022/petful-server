# Petful
Live Link: https://petful.maman0022.vercel.app/ 
  
## Summary  
This is the server side of the full-stack app Petful. The main purpose of this back-end is to get a list of random people and pets that is used in a mock adoption website. More information about the front-end can be found here - https://github.com/maman0022/petful-client.  
  
## Tech Stack  
This is a Node.js back-end using the express.js server framework.

## API Documentation  
BASE URL: https://mighty-woodland-45937.herokuapp.com
### Endpoints  

`POST /people`  
Adds a person to the queue. *Requires a request body*  
Key|Value
---|---
name|string, required
  
Returns a 204 status code on success.
  
---  

`DELETE /people`  
Removes the person at the front of the queue.   
Returns a 204 status code on success.
  
---  
  
`GET /people`  
Gets all people in the queue.  
Returns an array of names.  

---  
  
`GET /pets`  
Gets all pets (cats and dogs) that are available for adoption.  
Returns an object containing "cats" and "dogs", both of which are an array of objects containing details about that animal.  

---  
  
`DELETE /pets`  
Removes the passed in animal from the queue. *Requires a request body*   
Key|Value
---|---
type|string ("cats" | "dogs"), required
  
Returns a 204 status code on success.