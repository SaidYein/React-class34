import { useEffect, useContext } from "react";
import Map from "./Map";
import SideBar from "./SideBar";
import Loader from "./Loader";
import { FetchContext } from "./context/FetchContext";

function EventsController() {
  const { eventData } = useContext(FetchContext);
  const { loading } = useContext(FetchContext);
  const { fetchEvents } = useContext(FetchContext);

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="container">
      {!loading ? <Map eventData={eventData} /> : <Loader />}
      <SideBar />
    </div>
  );
}

export default EventsController;
