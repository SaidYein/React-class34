import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import products from "./fake-data/all-products";
import categories from "./fake-data/all-categories";

function App() {
  const [list, setList] = useState(products);
  // const [category, setCategory] = useState();

  const handleCategory = (e) => {
    const category = e.target.dataset.value;
    // setCategory(category);
    handleList(category);
    console.log(e.target.dataset.value);
  };

  const handleList = (category) => {
    switch (category) {
      case "electronics":
        setList(
          products.filter((item) => {
            return item.category === "electronics";
          })
        );
        break;
      case "jewellery":
        setList(
          products.filter((item) => {
            return item.category === "jewellery";
          })
        );
        break;
      case "men's clothing":
        setList(
          products.filter((item) => {
            return item.category === "men's clothing";
          })
        );
        break;
      case "women's clothing":
        setList(
          products.filter((item) => {
            return item.category === "women's clothing";
          })
        );
        break;
      default:
        setList(products);
        break;
    }
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <Navbar handleCategory={handleCategory} categories={categories} />
      <ProductList products={list} />
    </div>
  );
}

export default App;
