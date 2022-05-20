import React from "react";
import Text from "../Text";
import "./Timeline.css";

function Timeline({ name, date, content }) {
  return (
    <div className="timelineContainer">
      <div className="timeline">
        <Text text={date} fontSize={20} />
        <Text color="#174574" text={name} fontSize={18} fontWeight="bold" />
        <ul className="timelineListContainer">
          {content.map((c) => (
            <li className="timelineList">
              <Text text={c} fontSize={18} />
            </li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
}

export default Timeline;
