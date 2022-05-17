import React from "react";
import "./Text.css";

function Text({ text, color, fontSize, fontWeight, textAlign }) {
  return (
    <span
      className="text"
      style={{
        color: `${color}`,
        fontSize: `${fontSize}px`,
        fontWeight: `${fontWeight}`,
        textAlign: `${textAlign}`,
      }}
    >
      {text}
    </span>
  );
}

export default Text;
