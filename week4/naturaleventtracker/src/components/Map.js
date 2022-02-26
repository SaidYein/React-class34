import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import EventInfo from "./EventInfo";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  // const [infoPosition, setInfoPosition] = useState(null);

  const markers = eventData.map((event) => {
    return (
      <LocationMarker
        lat={event.geometries[0].coordinates[1]}
        lng={event.geometries[0].coordinates[0]}
        onClick={(e) => {
          // console.log(e);
          // setInfoPosition({ x: e.ClientX, y: e.ClientY });
          setLocationInfo({ id: event.id, title: event.title });
        }}
      />
    );
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDuCmgW7oFKXWj2JjYeh7RvxA_0uFFuL34" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
        {locationInfo && <EventInfo locationInfo={locationInfo} />}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 52.2,
    lng: 5.65,
  },
  zoom: 7,
};

export default Map;
