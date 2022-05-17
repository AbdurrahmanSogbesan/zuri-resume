import React from "react";
import Text from "../Text";
import "./Timeline.css";

function Timeline({ name, date, content }) {
  return (
    <div className="timelineContainer">
      <div className="timeline">
        <Text text={date} fontSize={20} />
        <Text text={name} fontSize={18} fontWeight="bold" />
        <Text text={content} />
      </div>
      <hr />
    </div>
  );
}

export default Timeline;
