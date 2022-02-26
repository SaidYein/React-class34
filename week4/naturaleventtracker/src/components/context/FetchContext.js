import { useState, createContext } from "react";

export const FetchContext = createContext();

export const EventProvider = (props) => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState(false);

  const fetchEvents = async () => {
    setLoading(true);
    const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
    const { events } = await res.json();
    const categories = new Set(
      events.map((event) => event.categories[0].title)
    );

    setEventData(events);
    setCategories([...categories]);
    setLoading(false);
  };
  return (
    <FetchContext.Provider
      value={{ eventData, loading, fetchEvents, categories }}
    >
      {props.children}
    </FetchContext.Provider>
  );
};
