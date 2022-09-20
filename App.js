import Nav from "./Components/Nav";
import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Books from "./Pages/Books.jsx";
import { books } from "./data";
import Bookinfo from "./Pages/Bookinfo.jsx";
import Cart from "./Pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => {
        if (item.id === book.id) {
          return {
            ...item,
            quantity: +quantity,
          };
        } else {
          return item;
        }
      })
    );
  }

  function numberOfItems(){
    let count = 0
    cart.forEach(item => {
      count += item.quantity
    })
    return count
  }

  function removeItem(item){
    setCart(cart.filter(book => book.id !== item.id))
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <Bookinfo books={books} addToCart={addToCart} cart={cart}/>
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart books={books} cart={cart} changeQuantity={changeQuantity}  removeItem={removeItem} />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
