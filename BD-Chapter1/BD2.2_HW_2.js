let express = require('express');
let app = express();
let PORT = 3000;

//Exercise 1: Filter Prime Numbers
//Sample Endpoint: http://localhost:3000/prime-numbers

 let numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function filterPrimeNumber(number){
        if(number < 1) return false;
        for(let i=2;i<number;i++){
          if(number % i === 0){
            return false;
          }

          return true;
        }
}

app.get("/prime-numbers",(req , res) => {
    let result = numbers.filter(number => filterPrimeNumber(number));
     res.json(result);
})

//Exercise 2: Filter Positive Numbers
//Sample Endpoint: http://localhost:3000/positive-numbers
  let nums =  [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

   function filterPositiveNumbers(number){
       return number > 0;
   }

app.get("/positive-numbers", (req ,res) => {
         let result = nums.filter(number => filterPositiveNumbers(number));
            res.json(result);
});


    //Exercise 3: Filter Negative Numbers
    //Sample Endpoint: http://localhost:3000/negative-numbers

       function filterNegativeNumber(number){
                return number < 0;
       }

      app.get("/negative-numbers",(req , res) => {
            let result = nums.filter(number => filterNegativeNumber(number));
              res.json(result);
      })

  //Exercise 4: Filter Odd Numbers
  //Sample Endpoint: http://localhost:3000/odd-numbers

      function filterOddNumber(number){
          let result = number % 2 !== 0;
        return result;
      }

       app.get("/odd-numbers", (req , res) => {
            let result = numbers.filter(number => filterOddNumber(number));
             res.json(result);
       })

     //Exercise 5: Filter Numbers Greater Than a Given Value 
     //Sample Endpoint: http://localhost:3000/numbers-greater-than?value=5

      function  filterNumbersGreaterThan(number,value){
              return number > value;
      }

       app.get("/numbers-greater-than", (req ,res) => {
               let value = parseFloat(req.query.value);
               let result = numbers.filter(number => 
                      filterNumbersGreaterThan(number, value));
                  res.json(result);
         
       })

     //Exercise 6: Filter Numbers Less Than a Given Value
    //Sample Endpoint: http://localhost:3000/numbers-less-than?value=5
       function  filterNumbersLessThan(number,value){
         return number < value;
       }

       app.get("/numbers-less-than", (req ,res) => {
          let value = parseFloat(req.query.value);
          let result = numbers.filter(number => 
                 filterNumbersLessThan(number, value));
             res.json(result);

       })

    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
