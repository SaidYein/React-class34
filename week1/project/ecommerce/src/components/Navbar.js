import React from "react";
import categories from "../fake-data/all-categories";

const Navbar = ({ handleCategory, categories }) => {
  return (
    <ul className="navbar">
      {categories.map((item, index) => {
        return (
          <li
            data-value={categories[index]}
            key={index}
            className="navItem"
            onClick={handleCategory}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
