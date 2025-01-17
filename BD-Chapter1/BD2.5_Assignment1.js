/*Introduction
FlipDeal is an eCommerce company that has expanded its product range from fitness to now selling various kinds of phones.
Now, for FlipDeal you need to create APIs which filters out the products based on various conditions:
 */

let express = require("express");
let app = express();
let cors = require('cors');

app.use(cors());
let PORT = 3000;

let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Xiaomi",
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: "iOS",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Oppo",
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Samsung",
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 48,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Xiaomi",
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: "iOS",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "Apple",
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Samsung",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Oppo",
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "Apple",
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 12,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Oppo",
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Apple",
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Oppo",
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Apple",
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Samsung",
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 12,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Oppo",
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: "Android",
    camera: 108,
  },
];

/*Endpoint 1: Get the products sorted by popularity
Write an Express code snippet to sort products based on their individual ratings.
<http://localhost:3000/products/sort/popularity> */

function sortByPopularity(product1,product2){
  return product2.rating - product1.rating;
}

app.get("/products/sort/popularity",(req , res) => {
     let productsCopy = products.slice();
     let sortedProducts =  productsCopy.sort(sortByPopularity);
      res.json({ products: sortedProducts });
})

/*Endpoint 2: Get the products sorted by “high-to-low” price
Write an Express code snippet to sort products based on their individual pricing.
<http://localhost:3000/products/sort/price-high-to-low>*/
function sortByPriceHightoLow(product1,product2){
  return product2.price - product1.price;
}

app.get("/products/sort/price-high-to-low",(req ,res) => {
         let productsCopy = products.slice();
          let sortedProducts = productsCopy.sort(sortByPriceHightoLow);
           res.json({ products: sortedProducts });
})

/*Endpoint 3: Get the products sorted by “low-to-high” price
Write an Express code snippet to sort products based on their individual pricing.
<http://localhost:3000/products/sort/price-low-to-high>*/

function sortByPriceLowtoHigh(product1,product2){
    return product1.price - product2.price;
}

app.get("/products/sort/price-low-to-high",(req , res) => {
      let productCopy = products.slice();
       let sortedProducts = productCopy.sort(sortByPriceLowtoHigh);
             res.json({ products: sortedProducts });
})

/* Endpoint 4: Filter the products based on the “RAM” option.
Write an Express code snippet to filter products based on the selected RAM option.
<http://localhost:3000/products/filter/ram?ram=8> */

function filterByRam(product,ram){
    return product.ram === ram;
}

app.get("/products/filter/ram",(req , res) => {
      let ram = parseFloat(req.query.ram);
      let filterProducts = products.filter((product) => filterByRam(product,ram));
      res.json({ products: filterProducts });
});

/*Endpoint 5: Filter the products based on the “ROM” option.
Write an Express code snippet to filter products based on the selected ROM option.
<http://localhost:3000/products/filter/rom?rom=64>
*/

function filterByRom(product,rom){
     return product.rom === rom;
}

app.get("/products/filter/rom",(req , res) => {
             let rom = parseFloat(req.query.rom);
             let filterProducts = products.filter(product => filterByRom(product,rom));   
  res.json({ products: filterProducts });
})

/*Endpoint 6: Filter the products based on the “Brand” option.
Write an Express code snippet to filter products based on the selected Brand option.
<http://localhost:3000/products/filter/brand?brand=apple>*/

function filterByBrand(product,brand){
    return  product.brand.toLowerCase() === brand.toLowerCase();
}

app.get("/products/filter/brand",(req , res) => {
       let brand = req.query.brand;
        let filterProducts = products.filter(product => filterByBrand(product,brand));
       res.json({ products: filterProducts });
     
});

/*Endpoint 7: Filter the products based on the “OS” option.
Write an Express code snippet to filter products based on the selected OS option.
<http://localhost:3000/products/filter/os?os=Android>*/

function filterByOs(product,os){
     return product.os.toLowerCase() === os.toLowerCase();
}

app.get("/products/filter/os",( req , res) => {
       let os = req.query.os;
           let filterProducts = products.filter(product => filterByOs(product,os))
           res.json({ products: filterProducts });
});

/*Endpoint 8: Filter the products based on the “Price” option.
Write an Express code snippet to filter products based on the selected price option.
<http://localhost:3000/products/filter/price?price=30000>*/

function filterByPrice(product,price){
   return product.price <= price;
}

app.get("/products/filter/price",( req , res) => {
     let price = parseFloat(req.query.price);
         let filterProducts = products.filter(product => filterByPrice(product,price))
         res.json({ products: filterProducts });
});


/*Endpoint 9: Send original array of products
Write an Express code snippet to send all available products.
<http://localhost:3000/products>*/


app.get("/products",( req , res ) => {
         res.json({ products: products });
});










app.listen(PORT,() => {
    console.log("Server is running on http://localhost:" + PORT);  
})