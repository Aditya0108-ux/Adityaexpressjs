let express = require('express');
let app = express();
let port = 3000;

// Sample data
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let names = ['Rahul', 'Sita', 'Amit', 'Vikram', 'Priya'];

let employees = [
  { employeeId: 1, name: 'Rahul' },
  { employeeId: 2, name: 'Sita' },
  { employeeId: 3, name: 'Amit' }
];

let contacts = [
  { phoneNumber: '1234567890', name: 'Rahul', address: '123 Street, City' },
  { phoneNumber: '0987654321', name: 'Sita', address: '456 Avenue, City' },
  { phoneNumber: '1112223334', name: 'Amit', address: '789 Boulevard, City' }
];


/* Exercise 1: Find a Number in the Array
<http://localhost:3000/numbers/find/5>*/

function findNumber(number,num){
    return number === num;
}

app.get('/numbers/find/:number',(req , res) => {
            let num = parseInt(req.params.number);
            let result = numbers.find(number => findNumber(number, num));
              res.json(result);
})

/*Exercise 2:Find a Name in the Array
<http://localhost:3000/names/find/Sita>*/

function findName(ele,target){
   return ele === target;
}

app.get('/names/find/:name',(req , res) => {
         let target = req.params.name;
          let result = names.find(ele => findName(ele, target));
             res.json(result);
})

/*Exercise 3: Find an Employee by ID
<http://localhost:3000/employees/find/2>*/
function findEmployeeById(employee,id){
     return employee.employeeId === id;
}

app.get("/employees/find/:id",( req , res) => {
           let id = parseInt(req.params.id);
           let result = employees.find(employee => findEmployeeById(employee,id));
             res.json(result);
})

/* Exercise 4: Find a Contact by Phone Number
<http://localhost:3000/contacts/find/1234567890>*/

function findContactByPhoneNumber(contact,phoneNumber){
     return contact.phoneNumber === phoneNumber;
}

app.get('/contacts/find/:phoneNumber',(req , res) => {
            let phoneNumber = req.params.phoneNumber;
             let result = contacts.find(contact => findContactByPhoneNumber(contact,phoneNumber));
               res.json(result);
})

app.listen(port, (req , res) => {
      console.log('Server is running on the http://localhost:' + port);
})