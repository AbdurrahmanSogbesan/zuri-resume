import React from "react";
import Text from "../Text";
import "./Subtitle.css";

function Subtitle({ text, color, fontSize = 20 }) {
  return (
    <div className="subtitle">
      <Text text={text} color={color} fontWeight="bold" fontSize={fontSize} />
    </div>
  );
}

export default Subtitle;
