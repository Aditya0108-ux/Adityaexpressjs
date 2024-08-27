let express = require('express');
let app = express();
let PORT = 3000;

let users = [
  { id: 1, username: 'ankit', fullName: 'Ankit Kumar', email: 'ankit@gmail.com', },
  { id: 2, username: 'dhananjit', fullName: 'Dhananjit Singh', email: 'dhananjit.singh@gmail.com' },
];

let creditCards = [
  { number: '1234567890123456', holder: 'John Doe', expiry: '12/24' },
  { number: '9876543210987654', holder: 'Jane Smith', expiry: '06/23' }
];

let books = [
  { isbn: '9783161484100', title: 'Example Book', author: 'John Author' },
  { isbn: '9781234567897', title: 'Another Book', author: 'Jane Writer' }
];

let people = [
  { ssn: '123-45-6789', name: 'John Doe', birthDate: '1990-01-01' },
  { ssn: '987-65-4321', name: 'Jane Smith', birthDate: '1985-05-05' }
];

/* Exercise 1: Check username availability
http://localhost:3000/username/find/ankit123*/

function findUserName(user,username){
   return user.username === username;
}

app.get('/username/find/:username',(req , res) => {
         let username = req.params.username;
          let result = users.find(user => findUserName(user,username));
          if(result){
            result = "Username is not available";
            res.json({result});
          }
  else{
           result = "Username is available";
           res.json({result});
  }
})

/* Exercise 2: Find Credit Card Number
http://localhost:3000/credit-cards/find?cardNumber=1234567890123456 */

function findCreditCard(creditCard,cardNumber){
       return creditCard.number === cardNumber;
}

app.get('/credit-cards/find',(req , res) => {
         let cardNumber = req.query.cardNumber;
           let creditCard = creditCards.find(card => findCreditCard(card,cardNumber));
          res.json({creditCard});
          
})

/* Exercise 3: Find Email Address
http://localhost:3000/emails/find?email=ankit@gmail.com */

function findUserByEmail(user,email){
     return user.email === email;
}

app.get('/emails/find',(req , res) => {
         let email = req.query.email;
         let user = users.find(ele => findUserByEmail(ele,email));
            res.json({user});
})

/* Exercise 4: Find ISBN Number ( for books )
http://localhost:3000/books/find?isbn=9783161484100 */

function findBookByISBN(book,isbn){
   let result = book.isbn === isbn;
    return result;
}

app.get('/books/find',( req , res) => {
           let isbn = req.query.isbn;
           let book = books.find(book => findBookByISBN(book,isbn));
            res.json({book : book});
})

/* Exercise 5: Find Social Security Number (SSN)
 http://localhost:3000/ssn/find?ssn=123-45-6789*/

function findPersonBySSN(person,ssn){
    return person.ssn === ssn;
}

app.get('/ssn/find',( req , res) => {
    let ssn = req.query.ssn;
     let person = people.find( ele => findPersonBySSN(ele,ssn));
      res.json({person});
})


app.listen(PORT,() => {
    console.log("Server is running on http://localhost:" + PORT);
})