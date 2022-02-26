import { Icon } from "@iconify/react";
import targetIcon from "@iconify/icons-mdi/target";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={targetIcon} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
