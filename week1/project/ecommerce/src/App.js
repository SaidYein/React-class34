import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import products from "./fake-data/all-products";
import categories from "./fake-data/all-categories";

function App() {
  const [list, setList] = useState(products);

  const handleCategory = (e) => {
    const category = e.target.dataset.value;
    handleList(category);
  };

  const handleList = (category) => {
    const list = products.filter((item) => item.category === category);
    setList(list);
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
