let express = require('express');
let app = express();
let PORT = 3000;

let phones = [
  { number: '123-456-7890', owner: 'Alice', type: 'mobile' },
  { number: '987-654-3210', owner: 'Bob', type: 'home' }
];

let accounts = [
  { number: '111122223333', holder: 'Charlie', balance: 5000 },
  { number: '444455556666', holder: 'Dave', balance: 3000 }
];

let licenses = [
  { number: 'D1234567', name: 'Eve', expiryDate: '2026-04-01' },
  { number: 'D7654321', name: 'Frank', expiryDate: '2024-11-15' }
];

let employees = [
  { id: 'E1234', name: 'Grace', department: 'Engineering' },
  { id: 'E5678', name: 'Hank', department: 'Marketing' }
];

let orders = [
  { id: 'ORD12345', customerName: 'Ivy', totalAmount: 150 },
  { id: 'ORD67890', customerName: 'Jake', totalAmount: 200 }
];

/* Exercise 1: Find Mobile Phone Number
<http://localhost:3000/phones/find?phoneNumber=123-456-7890> */

function findPhoneNumber(phone , phoneNumber){
     return phone.number === phoneNumber;
}

app.get('/phones/find', (req , res) => {
     let phoneNumber = req.query.phoneNumber;
     let phone = phones.find( phone => findPhoneNumber(phone, phoneNumber));
     res.json({phone});
})

/* Exercise 2: Find Bank Account Number
<http://localhost:3000/accounts/find?accountNumber=111122223333> */

function findAccountNumber(account , accountNumber){
      return account.number === accountNumber;
}

app.get('/accounts/find', ( req , res) => {
         let accountNumber = req.query.accountNumber;
         let account = accounts.find( account => findAccountNumber(account,accountNumber));
    res.json({account});
})

/* Exercise 3: Find Driver's License Number
<http://localhost:3000/licenses/find?licenseNumber=D1234567> */

function findLicenseNumber(license , licenseNumber){
       return license.number === licenseNumber;
}

app.get('/licenses/find', ( req , res) => {
        let licenseNumber = req.query.licenseNumber;
        let license = licenses.find( license => findLicenseNumber(license,licenseNumber));
       res.json({license});
})

/* Exercise 4: Find Employee ID
<http://localhost:3000/employees/find?employeeId=E1234> */

function findEmployeeById(employee, employeeId){
      return employee.id === employeeId;
}

app.get('/employees/find',( req , res) => {
    let employeeId = req.query.employeeId;
     let employee = employees.find(employee => findEmployeeById(employee, employeeId));
    res.json({employee});
})

/* Exercise 5: Find Order ID
<http://localhost:3000/orders/find?orderId=ORD12345> */

function findOrderById(order , orderId){
         return order.id === orderId;
}

app.get('/orders/find', (req , res) => {
        let orderId = req.query.orderId;
        let order = orders.find(order => findOrderById(order,orderId));
           res.json({order});
})


app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
})