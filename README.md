# This is my Backend app challenge.

I'm using Node.js runtime environment, Express.js server Framework, Jest.js for unit testing and Joi.js for input validation.

for running the app you need to install NODE on your machine.

make sure to install all dependencies from npm.

    npm install
    
and THEN run a command in the terminal:    
    
    node app.js


the app will start listening by deafult on localhost with PORT 3000, (localhost:3000)
although you can change this with giving a specific port value to PORT environment variable.

## assumptions, extras and decisions:

- decided to make it a HTTP POST request. with JSON file attached to the body, and with 2 arrays inside.
    in the response from the server also a JSON with single array.
    the reasoning behind this is that a URL string can be limited in size by some unknown restrictions.
    also there is a known convention that a url preferably will not exceed 2000 chars. 
    so my arrays will not have this limitation.

- my main assumption is that a number represented by an array can not be negative. (only positives and zero) 

- I've also created a simple html page with script just for fun and it was a bit of a learning for me.
