This is my Backend app for DoubleVerify challange.

I'm using Node.js runtime environment, Express.js server Framework, Jest.js for unit testing and Joi.js for input validation.

assumptions, extras and decisions:

- decided to make it a HTTP POST request. with JSON file attached to the body, and with 2 arrays inside.
    in the response from the server also a JSON with single array.
    the reasoning behind this is that a URL string can be limited in size by some unknown restrictions.
    also there is a known convention that a url preferably will not exceed 2000 chars. 
    so my arrays will not have this limitation.

- my main assumption is that a number represented by an array can not be negative. (only positives and zero) 

- I've also created a simple html page with script just for fun and it was a bit of a challange.