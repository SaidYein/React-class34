const EventInfo = ({ locationInfo, infoPosition }) => {
  return (
    <div className="event-info">
      <h2> Event Info</h2>
      <ul>
        <li>
          ID: <strong>{locationInfo.id}</strong>
        </li>
        <li>
          TITLE: <strong>{locationInfo.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default EventInfo;
