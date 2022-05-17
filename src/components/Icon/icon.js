import React from "react";
import "./icon.css";
import icons from "./icons";
import PropTypes from "prop-types";

function Icon({ icon, height = 23, width = 23, fill = "dodgerblue", onClick }) {
  const IconComponent = icons[icon];

  return (
    <div className="iconContainer" onClick={onClick}>
      <IconComponent height={height} width={width} fill={fill} />
    </div>
  );
}

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  fill: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
