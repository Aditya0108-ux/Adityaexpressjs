let express = require("express");
let app = express();
let PORT = 3000;

let books = [
  { title: "Moby Jonas", author: "Herman Melville", publicationYear: 2023 },
  { title: "1984", author: "George Orwell", publicationYear: 1984 },
  {
    title: "A Tale of two cities",
    author: "Charlie Jonas",
    publicationYear: 2000,
  },
];

let employees = [
  { name: "John", salary: 75000 },
   { name: "Doe", salary: 30000 },
  { name: "Jane", salary: 50000 },
];

let products = [
   { name: "Product A", price: 15 },
  { name: "Product B", price: 25 },
   { name: "Product C", price: 10 },
]
let movies = [
   { title: "Movie A", rating: 9.0 },
  { title: "Movie C", rating: 7.0 },
   { title: "Movie B", rating: 8.5 },
];

//Exercise 1: Sort Books by Year in ascending order
//Sample Endpoint: http://localhost:3000/books/sort-by-year

function sortBooksByYear(book1, book2) {
  return book1.publicationYear - book2.publicationYear;
}

app.get("/books/sort-by-year", (req, res) => {
  let booksCopy = books.slice();
  booksCopy.sort(sortBooksByYear);
  res.json(booksCopy);
});

//Exercise 2: Sort Employees by Salary in Descending Order
//Sample Endpoint: http://localhost:3000/employees/sort-by-salary

function sortEmployeesBySalary(employee1,employee2){
  return employee2.salary - employee1.salary;
}

app.get("/employees/sort-by-salary",(req , res) => {
       let employeesCopy = employees.slice();
       employeesCopy.sort(sortEmployeesBySalary);
        res.json(employeesCopy);
})

//Exercise 3: Sort Products by Price in Ascending Order
//Sample Endpoint: http://localhost:3000/products/sort-by-price

function sortProductsByPrice(product1,product2){
    return product1.price - product2.price;
}

app.get('/products/sort-by-price',(req , res) => {
      let productsCopy = products.slice();
      productsCopy.sort(sortProductsByPrice);
  res.json(productsCopy);
})

//Exercise 4: Sort Movies by Rating in Descending Order
//Sample Endpoint: http://localhost:3000/movies/sort-by-rating
function sortmoviesByRating(movie1,movie2){
  return movie2.rating - movie1.rating;
}

app.get('/movies/sort-by-rating',(req , res) => {
    let moviesCopy = movies.slice();
    moviesCopy.sort(sortmoviesByRating);
res.json(moviesCopy);
})



app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
