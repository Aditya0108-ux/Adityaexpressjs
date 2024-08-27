//Filters
let express = require("express");
let app = express();
let PORT = 3000;

//Question 1: Return Only the Even Numbers
//API Call: http://localhost:3000/even-numbers

let numbers = [1,2,3,4,5,6,7,8,9,10];

function filterEvenNumbers(ele){
    return ele % 2 === 0;
}

app.get("/even-numbers", (req , res) => {
  let result = numbers.filter(ele => filterEvenNumbers(ele))
  res.json(result);
})

//Question 2: Return Only the Ages Greater Than 18
//API Call: http://localhost:3000/adult-ages

let ages =  [10, 20, 30, 15, 17, 25];

function filterAges(age){
  return age > 18;
}

app.get("/adult-ages",(req , res) => {
  let result = ages.filter(age => filterAges(age))
  res.json(result);
})

//Question 3: Return Only the Words Longer Than 5 Characters
//API Call: http://localhost:3000/long-words

let words =  ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];

function filterLongWords(word){
  return word.length > 5;
}

app.get("/long-words",(req , res) => {
  let result = words.filter(word => filterLongWords(word))
  res.json(result);
})

//Question 4: Return Only the Files Smaller Than a Certain Size
//API Call: http://localhost:3000/small-files?filterParam=100

let files =  [50, 200, 75, 120, 30, 90, 150];

function filterSmallFiles(file , filterParam){
  return file < filterParam;
}

app.get("/small-files",(req ,res) => {
  let filterParam = parseFloat(req.query.filterParam);
  let smallFiles = files.filter(file => filterSmallFiles(file,filterParam));
  res.json(smallFiles);
})





app.listen(PORT) , () => {
  console.log("Server is running on http://localhost:" + PORT);
}

