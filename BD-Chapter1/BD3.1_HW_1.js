let express = require('express');
const { rmSync } = require('fs');
let app = express();
let PORT = 3000;

let numbers = [1,2,3,4,5];
let strings = ["hello","world","javascript","node"];

/*Exercise 1: Multiply All Numbers in an Array
<http://localhost:3000/numbers/multiply?multiplier=2>*/

function multiplyNumber(numbers,multiplier){
      for(let i=0;i < numbers.length;i++){
          numbers[i] = numbers[i] * multiplier;
      }
        return numbers;
}

app.get('numbers/multiply',(req , res) => {
       let multiplier = req.query.multiplier;
         let result = multiplyNumber(numbers,multiplier);
           res.json({result : result});
})

/* Exercise 2: Concatenate Strings
<http://localhost:3000/strings/concat?suffix=! */

function concatSuffix(strings, suffix){
          let result = [];
          for(let i=0; i< strings.length; i++){
             result.push(strings[i] + suffix );
          }
            return result;
}

app.get('/strings/concat',(req , res) => {
         let suffix = req.query.suffix;
           let result  = concatSuffix(strings,suffix);
              res.json({result : result});
})

/*Exercise 3: Remove All Odd Numbers from an Array
<http://localhost:3000/numbers/remove-odds>*/

function removeOddNumbers(numbers){
       let result = [];
  for(let i=0; i<numbers.length; i++){
         if(numbers[i] % 2 === 0){
            result.push(numbers[i]);
         }
  }

  return result;
}

app.get('/numbers/remove-odds',(req , res) => {
       let result = removeOddNumbers(numbers);
         res.json({result : result});
})

/*Exercise 4: Join All Strings in an Array
<http://localhost:3000/strings/join>*/

function joinStrings(strings){
         let result ='';
        for(let i=0;i<strings.length;i++){
             result = result + " " + strings[i];
        }
            return result;
}

app.get('/strings/join',(req , res) => {
       let result = joinStrings(strings);
        res.json({result : result});
})

/* Exercise 5: Double All Numbers in an Array
<http://localhost:3000/numbers/double>*/
function doubleNumber(numbers){
  for(let i=0;i < numbers.length;i++){
      numbers[i] = numbers[i] * 2;
  }
    return numbers;
}

app.get('/numbers/double',(req , res) => {
     let result = doubleNumber(numbers);
       res.json({result : result});
})



app.listen(PORT,() => {
   console.log("Server is running on http://localhost:" + PORT);
})