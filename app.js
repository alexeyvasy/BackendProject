const express = require('express');
const Joi = require('@hapi/joi');
const path = require("path")
const app = express();
import { sum } from './modules/mathlogic';
import { multiply } from './modules/mathlogic';

app.use(express.json());

function errorInputValidation(req, res) {

    const arraySchema = Joi.array().min(1).required().items(Joi.number().integer().min(0).max(9));

    const objectSchema = Joi.object().pattern(Joi.string().min(1), arraySchema);            // schema for validating that a key will be a string and the value a proper array

    const result = objectSchema.validate(req.body);

    if (result.error) {
        console.log(result.error.message);
        res.statusMessage = `bad input: ${result.error.message}`;
        res.status(400).end();
    }
};

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.post("/api/sum", (req, res) => {

    //  validating the input JSON. checking if it is actually JSON Object with 2 arrays of integers. 
    errorInputValidation(req, res);
    const num1 = req.body[Object.keys(req.body)[0]];
    const num2 = req.body[Object.keys(req.body)[1]];

    const answer = {
        "sumAnswerArray": sum(num1, num2)
    };

    res.send(answer);
});

app.post("/api/multiply", (req, res) => {

    //  validating the input JSON file. checking if it is actually JSON Object with 2 arrays of integers. 
    errorInputValidation(req, res);
    const num1 = req.body[Object.keys(req.body)[0]];
    const num2 = req.body[Object.keys(req.body)[1]];

    const answer = {
        "multiplyAnswerArray": multiply(num1, num2)
    };

    res.send(answer);
});

const port = process.env.port || 3000
app.listen(port, () => {
    console.log(`listning on port: ${port}`);
});

exports.sum = sum;
exports.multiply = multiply;