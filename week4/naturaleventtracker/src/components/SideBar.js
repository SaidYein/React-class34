import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { FetchContext } from "./context/FetchContext";
import Loader from "./Loader";
import { SelectedEventsContext } from "./context/SelectedEventsContext";

const SideBar = () => {
  const { categories } = useContext(FetchContext);
  const { loading } = useContext(FetchContext);
  const [selectedEvents, setSelectedEvents] = useContext(SelectedEventsContext);

  const selectedEventsHandler = (e) => {
    if (!selectedEvents.eventArray.includes(e.target.value)) {
      setSelectedEvents((prevState) => ({
        eventArray: [...prevState.eventArray, e.target.value],
      }));
    } else {
      setSelectedEvents({
        eventArray: selectedEvents.eventArray.filter(
          (item) => item !== e.target.value
        ),
      });
    }
  };
  // console.log(selectedEvents);
  return loading ? (
    <Loader />
  ) : (
    <ul className="sidebar">
      {categories &&
        categories.map((event) => {
          return (
            <li key={event}>
              <button
                // name="nat_event"
                value={event}
                onClick={selectedEventsHandler}
              >
                {event}
              </button>
              {/* <input
                type="radio"
                id={event}
                // name="nat_event"
                value={event}
                onClick={selectedEventsHandler}
              />
              <label>{event}</label> */}
            </li>
          );
        })}
    </ul>
  );
};

export default SideBar;
