import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Dishes from "./components/Dishes";
// import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CategoryMenu from "./components/CategoryMenu";
import FoodItems from "./components/FoodItems";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        {/* <div id="dishes">
            <Dishes />
          </div>
          <div id="about">
            <About />
          </div> */}

        <CategoryMenu />
        <div id="dishes">
          <FoodItems />
        </div>
      </main>
      {/* <Cart /> */}
      <Router>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
