let express = require('express');
let app = express();
let PORT = 3000;

let cartItems = [
  {item : 'Book', price : 30},
  {item : 'Pen', price : 5},
 {item : 'Notebook', price : 50},
 {item : 'Bag', price : 125}
];

let students = [
  {name : 'John', grade : 'A'},
  {name : 'Jane', grade : 'A'},
 {name : 'Jack', grade : 'B'},
 {name : 'Jill', grade : 'C'}
];

let temperatures = [0,20,30,100];

let student_scores = [
  { name: 'John', score: 85 },
  { name: 'Jane', score: 90 },
  { name: 'Jack', score: 70 },
  { name: 'Jill', score: 60 }
];

let sentence = 'The quick brown fox jumps over the lazy dog';

/*Exercise 1: Calculate Total Price of Items in a Cart
<http://localhost:3000/cart/total>*/

function calculateTotalPrice(cartItems){
  let totalPrice = 0;
   for(let i=0;i<cartItems.length;i++){
     totalPrice += cartItems[i].price;
   }
      return totalPrice;
}

app.get('/cart/total',(req , res) => {
      let total = calculateTotalPrice(cartItems);
       res.json({total});
});

/* Exercise 2: Filter Students by Grade
<http://localhost:3000/students/filter?grade=A>*/

function filterStudentsByGrade(students, grade){
      return students.grade === grade;
}

app.get('/students/filter' , (req , res) => {
       let grade = req.query.grade;
       let filterStudents = students.filter(student => filterStudentsByGrade(student,grade));
       res.json({students : filterStudents});
})

/*Exercise 3: Convert Temperatures from Celsius to Fahrenheit
<http://localhost:3000/temperatures/convert>*/

function convertCelsiustoFahrenheit(temperatures){
        let result = [];
        for(let i=0; i < temperatures.length;i++){
              result.push(temperatures[i] * 9/5 + 32);
        }
           return result;
}

app.get('/temperatures/convert',(req , res) => {
       let convertedTemperature = convertCelsiustoFahrenheit(temperatures);
         res.json({convertedTemperature});
})

/*Exercise 4: Calculate Average Score of Students
<http://localhost:3000/students/average-score>*/

function calculateAverageScore(student_scores){
        let result = 0;
         for(let i=0; i < student_scores.length;i++){
                    result += student_scores[i].score; 
         }
  return result/student_scores.length;
}

  app.get('/students/average-score', (req , res) => {
           let averageScore = calculateAverageScore(student_scores);
              res.json({averageScore});
  })

/* Exercise 5: Count Words in a Sentence
<http://localhost:3000/sentence/count-words>*/
function countWords(sentence){
      let wordCount = 1;
  for(let i=0 ; i<sentence.length;i++){
      if(sentence[i] === ' '){
        wordCount++;
      }
  }
  return wordCount;
}

app.get('/sentence/count-words',(req , res) => {
        let wordCount = countWords(sentence);
           res.json({wordCount});
})

app.listen(PORT, () => {
       console.log("Server is running on http://localhost:" + PORT);
})