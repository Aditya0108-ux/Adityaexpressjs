let express = require('express');
let app = express();
let PORT = 3000;

let heights =  [160, 175, 180, 165, 170];

let employees = [
  {name : "Rahul", employeeId : 101, salary : 50000},
  {name : "Sita", employeeId : 102, salary : 60000},
  {name : "Amit", employeeId : 103, salary : 45000},
]

let books = [
  {title : "The God of small things", author : "Arundhati Roy", pages : 340},
  {title : "The White Tiger", author : "Aravind Adiga", pages : 321},
  {title : "The palace of Illusions", author : "Chitra Banerjee", pages : 360},
]



//Question 1: Write an Express code snippet to sort an array of heights in ascending order.
//API Call: <http://localhost:3000/heights/sort-ascending>

function sortHeightsAscending(height1, height2){
      return height1 - height2;
}

app.get('/heights/sort-ascending',(req , res) => {
          let heightCopy = heights.slice();
          heightCopy.sort(sortHeightsAscending);
            res.json(heightCopy);
});


//Question 2: Write an Express code snippet to sort an array of heights in descending order.
//API Call: <http://localhost:3000/heights/sort-descending>

function sortHeightsDescending(height1,height2){
      return height2 - height1;
}

app.get('/heights/sort-descending',(req , res) => {
     let heightCopy = heights.slice();
     heightCopy.sort(sortHeightsDescending);
     res.json(heightCopy);
})

//Question 3: Write an Express code snippet to sort an array of employees by salary in descending order. 
//API Call: <http://localhost:3000/employees/sort-by-salary-descending>

function sortEmployeesBySalaryDescending(employee1,employee2){
      return employee2.salary - employee1.salary;
}

app.get('/employees/sort-by-salary-descending',(req , res) => {
    let employeeCopy = employees.slice();
    employeeCopy.sort(sortEmployeesBySalaryDescending);
    res.json(employeeCopy);
})

//Question 4: Write an Express code snippet to sort an array of books by pages in ascending order.
//API Call: <http://localhost:3000/books/sort-by-pages-ascending>

function sortBooksByPagesAscending(book1,book2){
    return book1.pages - book2.pages;
}

app.get('/books/sort-by-pages-ascending',( req, res) => {
      let booksCopy = books.slice();
      booksCopy.sort(sortBooksByPagesAscending);
       res.json(booksCopy);
})


app.listen(PORT,() => {
   console.log("Server is running on http://localhost:" + PORT);
})