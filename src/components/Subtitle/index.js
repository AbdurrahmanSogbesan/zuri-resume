import React from "react";
import Text from "../Text";
import "./Subtitle.css";

function Subtitle({ text }) {
  return (
    <div className="subtitle">
      <Text text={text} fontWeight="bold" fontSize={20} />
    </div>
  );
}

export default Subtitle;
