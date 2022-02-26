import { useState, useEffect } from "react";
import { Rings } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Map from "./components/Map";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();
      console.log(events);
      setEventData(events);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return (
    <div className="container">
      <Header />
      {!loading ? (
        <Map eventData={eventData} />
      ) : (
        <Rings color="#00BFFF" height={80} width={80} />
      )}
      <SideBar />
    </div>
  );
}

export default App;
