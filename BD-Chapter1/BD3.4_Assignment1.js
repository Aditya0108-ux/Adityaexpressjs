let express = require('express');
let app = express();
let cors = require('cors');
app.use(cors());
let PORT = 3000;

/* Shopping Cart Operations
FlipDeal is now expecting to also give its customers the ability to add items to the cart, edit the quantity, delete items, and also read the current state of the cart page.

They have added some new items to their Product Listing Page:
* Laptop
* Mobile
* Tablet  */ 

let cart = [
  { productId: 1, name: 'Laptop', price: 50000, quantity: 1 },
  { productId: 2, name: 'Mobile', price: 20000, quantity: 2 }
];

/* Endpoint 1: Add an Item to the Cart 
http://localhost:3000/cart/add?productId=3&name=Tablet&price=15000&quantity=1 */

function addItemToCart(productId, name, price , quantity){
     let item = {
          productId , name , price , quantity     
      }
      cart.push(item);
      return cart;
}

app.get('/cart/add', (req , res) => {
      let productId = parseInt(req.query.productId);
      let name = req.query.name;
     let price = parseFloat(req.query.price);
      let quantity = parseInt(req.query.quantity);
     let cartItems = addItemToCart(productId,name , price , quantity);
      res.send({cartItems});
})

/* Endpoint 2: Edit Quantity of an Item in the Cart
http://localhost:3000/cart/edit?productId=2&quantity=3 */

function updateCartById(cart , productId , quantity){
      for(let i=0; i<cart.length; i++){
            if(cart[i].productId === productId){
                   cart[i].quantity = quantity;
                    break;
            }
      }
      return cart;
}

app.get('/cart/edit',(req , res) => {
      let productId = parseInt(req.query.productId);
       let quantity = parseInt(req.query.quantity);
       let cartItems = updateCartById(cart , productId , quantity);
        res.json({cartItems});
})

/* Endpoint 3: Delete an Item from the Cart
http://localhost:3000/cart/delete?productId=1 */

function deleteItemByProductId(cart , productId){
        return cart.filter(ele => ele.productId != productId);
}
app.get('/cart/delete', (req , res)=> {
         let productId = parseInt(req.query.productId);
         let cartItems =  deleteItemByProductId(cart , productId);
           res.json({cartItems});
})

/* Endpoint 4: Read Items in the Cart
http://localhost:3000/cart*/

app.get('/cart', (req , res) => {
      res.json({cartItems : cart});
})

/* Endpoint 5: Calculate Total Quantity of Items in the Cart
http://localhost:3000/cart/total-quantity */

function totalItems(cart){
     let count = 0;
        for(let i=0; i<cart.length;i++){
          count++;
        }
     return count;
}

app.get('/cart/total-quantity',( req , res) => {
      let totalQuantity = totalItems(cart);
     res.json({totalQuantity});
})

/* Endpoint 6: Calculate Total Price of Items in the Cart
http://localhost:3000/cart/total-price */

function calculateTotalPrice(cart){
     let totalPrice = 0;
      for( let i=0; i<cart.length;i++){
             totalPrice = totalPrice +  (cart[i].price * cart[i].quantity);
      }
      return totalPrice;
}

app.get('/cart/total-price', (req , res) => {
           let totalPrice = calculateTotalPrice(cart);
             res.json({totalPrice});
})

app.listen(PORT, () => {
     console.log('Server is running on http://localhost:' + PORT);
})