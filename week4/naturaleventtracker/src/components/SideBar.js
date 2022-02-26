import React from "react";
import { Icon } from "@iconify/react";

const SideBar = () => {
  return (
    <div className="sidebar">
      <form type="submit">
        <p>Please select an Natural event to display:</p>
        <input type="radio" id="wildfire" name="nat_event" value="Wildfire" />
        <label>Wildfire</label>
        <br />
        <input type="radio" id="storm" name="nat_event" value="Storm" />
        <label>
          <Icon
            className="location-icon "
            icon="carbon:tropical-storm-tracks"
          />
          Storm
        </label>
        <br />
        <input
          type="radio"
          id="earthquake"
          name="nat_event"
          value="EarthQuake"
        />
        <label>EarthQuake</label>
      </form>
    </div>
  );
};

export default SideBar;
