const express = require('express');
const Joi = require('@hapi/joi');
const path = require("path")
const app = express();
app.use(express.json());

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

function sum(num1, num2){
    // HERE COMES LOGIC OF SUMMING 2 ARRAYS 
    if (num1.length >= num2.length) {
        return sumutil(num1, num2);
    }
    else {
        return sumutil(num2, num1);
    }
};

function sumutil(longerNum, shorterNum) {
    const num = [];

    let carry = 0;
    let i = longerNum.length - 1;
    let j = shorterNum.length - 1;

    while (j >= 0) {
        num.push((longerNum[i] + shorterNum[j] + carry) % 10);

        if ((longerNum[i] + shorterNum[j] + carry) > 9) {
            carry = 1;
        }
        else {
            carry = 0;
        }

        i--;
        j--;
    }

    while (i >= 0) {
        num.push((longerNum[i] + carry) % 10);

        if ((longerNum[i] + carry) > 9) {
            carry = 1;
        }
        else {
            carry = 0;
        }

        i--;
    }

    if (carry === 1) {
        num.push(carry);
    }

    num.reverse();
    removeUnnecessaryZeros(num);
    return num;
};

function removeUnnecessaryZeros(arr)
{
    while(arr[0] === 0 && arr.length > 1)
    {
        arr.shift();
    }
};

function multiply(num1, num2) {
    // HERE COMES LOGIC OF MULTIPLYING 2 ARRAYS 
    let num = [0];
    let degreeof10 = 0;
    let i = num1.length - 1;

    while (i >= 0) {
        let j = num2.length - 1;
        const tempNum = [];
        let carry = 0;

        while (j >= 0) {
            const currentCalc = (num1[i] * num2[j] + carry);
            
            tempNum.push(currentCalc % 10);

            if (currentCalc > 9) {
                carry = Math.floor(currentCalc / 10);
            }
            else {
                carry = 0;
            }
            j--;
        }

        if (carry > 0) {
            tempNum.push(carry);
        }

        tempNum.reverse();
        
        for (let k = 0; k < degreeof10; k++) {
            tempNum.push(0);
        }

        degreeof10++;
        i--;
        num = sum(tempNum, num);
    }

    removeUnnecessaryZeros(num);
    return num;
};


const port = process.env.port || 3000
app.listen(port, () => {
    console.log(`listning on port: ${port}`);
});

exports.sum = sum;
exports.multiply = multiply;