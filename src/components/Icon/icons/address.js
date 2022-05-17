import React from "react";

function Address(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      clip-rule="evenodd"
      fill-rule="evenodd"
      image-rendering="optimizeQuality"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      viewBox="0 0 254000 254000"
      style={{ background: "white", borderRadius: "100px" }}
      {...props}
    >
      <g id="图层_x0020_1">
        <path
          d="m127000 254000c-70129 0-127000-56871-127000-127000s56871-127000 127000-127000 127000 56871 127000 127000-56871 127000-127000 127000zm0-209606c34742 0 62905 28163 62905 62905 0 34741-62905 102306-62905 102306s-62905-67565-62905-102306c0-34742 28163-62905 62905-62905zm0 37912c13172 0 23854 10682 23854 23855 0 13172-10682 23854-23854 23854s-23854-10682-23854-23854c0-13173 10682-23855 23854-23855z"
          fill={props.fill}
        />
      </g>
    </svg>
  );
}

export default Address;
