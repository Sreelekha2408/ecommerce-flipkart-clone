# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

http://localhost:3000/home to access the landing page

You need to login to the account inorder to the add the item to the cart. It is a basic authentication developed in this. Login using below credentials to add item to the cart.

# Login Credentials to add product to cart
MobileNo: 9879812345
Password: admin@123

I have used bootstrap and react-bootstrap for the designing and used redux using thunk middleware to display the products. 

It has individual product page, when you click on any product, a new tab will be opened with option add,remove and buy now options for that item.

When you add a item, the count will be incremented next to the cart, which is the number of products you have added to the cart. It also implemented using redux(thunk).

When you click cart, it will redirects to cart page which displays the products with count of that product in cart.

Used apis from [fakeapistore](https://fakestoreapi.com/)

Header, Footer, Cart, ajax calls all are reusable components.
