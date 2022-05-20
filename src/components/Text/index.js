import React from "react";
import "./Text.css";

function Text({
  text,
  color,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  onClick,
  cursor,
  className,
}) {
  return (
    <span
      className={`text ${className}`}
      style={{
        color: `${color}`,
        fontSize: `${fontSize}px`,
        fontWeight: `${fontWeight}`,
        textAlign: `${textAlign}`,
        lineHeight: `${lineHeight}px`,
        cursor: `${cursor}`,
      }}
      onClick={onClick}
    >
      {text}
    </span>
  );
}

export default Text;
