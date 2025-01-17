//Sort 

let express = require('express');
let app = express();
let PORT = 3000;

let ages =  [25, 30, 18, 22, 27];

let students = [
  {name : "Rahul", rollNo : 101, marks : 85},
   {name : "Sita", rollNo : 102, marks : 95},
   {name : "Amit", rollNo : 103, marks : 70},
]

let cars = [
  {make : "Maruti", model : "Swift", mileage : "15"},
  {make : "Hyundai", model : "i20", mileage : "18"},
  {make : "Tata", model : "Nexon", mileage : "20"},
  
]


//Question 1: Sort Ages in Ascending Order
//API Call: http://localhost:3000/ages/sort-ascending

function sortAgesAscending(age1,age2){
  return age1 - age2;
}

app.get('/ages/sort-ascending',(req ,res) => {
    let agesCopy = ages.slice();
    //agesCopy.sort((a,b) => sortAgesAscending(a,b));
    agesCopy.sort(sortAgesAscending);
    res.json(agesCopy);
})

//Question 2: Sort Ages in Descending Order
//API Call: http://localhost:3000/ages/sort-descending

function sortAgesDescending(age1,age2){
  return age2 - age1;
}

app.get('/ages/sort-descending',( req , res) => {
      let agesCopy = ages.slice();
       agesCopy = agesCopy.sort(sortAgesDescending);
       res.json(agesCopy);
  
})

//Question 3: Sort Students by Marks in Descending Order
//API Call: http://localhost:3000/students/sort-by-marks-descending
function sortStudentsByMarksDescending(student1,student2){
  return student2.marks - student1.marks;
}

app.get('/students/sort-by-marks-descending',(req , res) => {
     let  studentCopy = students.slice();
     studentCopy.sort(sortStudentsByMarksDescending);
      res.json(studentCopy);
})

//Question 4: Sort Cars by Mileage in Descending Order
//API Call: http://localhost:3000/cars/sort-by-mileage-descending

function sortCarsByMileageDescending(car1,car2){
   return car2.mileage - car1.mileage;
}

app.get('/cars/sort-by-mileage-descending',(req ,res) => {
      let carsCopy = cars.slice();
      carsCopy.sort(sortCarsByMileageDescending);
      res.json(carsCopy);
})






app.listen(PORT,() => {
  console.log("Server is running on http://localhost:" + PORT);
})