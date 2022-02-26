import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { FetchContext } from "./context/FetchContext";
import Loader from "./Loader";

const SideBar = () => {
  const { categories } = useContext(FetchContext);
  const { loading } = useContext(FetchContext);

  // console.log(categories);
  return loading ? (
    <Loader />
  ) : (
    <ul className="sidebar">
      {categories &&
        categories.map((event) => {
          return (
            <li>
              <input type="radio" id={event} name="nat_event" value={event} />
              <label>{event}</label>
            </li>
          );
        })}
    </ul>
  );
};

export default SideBar;
