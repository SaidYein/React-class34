const LocationMarker = ({ onClick, icon }) => {
  return (
    <div className={`icons ${icon.class}`} onClick={onClick}>
      {icon.icon}
    </div>
  );
};

export default LocationMarker;
