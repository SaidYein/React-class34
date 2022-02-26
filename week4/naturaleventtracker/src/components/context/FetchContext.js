import { useState, createContext } from "react";

export const FetchContext = createContext();

export const EventProvider = (props) => {
  const [eventData, setEventData] = useState([]);

  const fetchEvents = async () => {
    const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
    const { events } = await res.json();
    console.log(events);
    setEventData(events);
  };
  fetchEvents();

  return (
    <FetchContext.Provider value={eventData}>
      {props.children}
    </FetchContext.Provider>
  );
};
