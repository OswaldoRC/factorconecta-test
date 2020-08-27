const { body, validationResult } = require('express-validator');
const express = require("express");
const bodyParser = require('body-parser');

const clean = (str) => str.toLowerCase().replace(/[\W_]/g,"");

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
 console.log("Api Running");
});

app.post('/palindrome', [
    //phrase must be defined and not empty
    body('phrase')
    .not().isEmpty()
  ], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const isPalindrome = (phrase) => {
        const cleanString = clean(phrase);
        const arrChar = cleanString.split('')

        //iterate through every first and last character and then pop that last one after validation
        for(let c of arrChar) {
            if(c !== arrChar.pop()){
                return false;
            }
        }
        return true;
    }
    res.json({palindrome: isPalindrome(req.body.phrase)})
  });