import React from "react";

function Phone(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
      <g id="Circle_Grid" data-name="Circle Grid">
        <circle cx="64" cy="64" fill={props.fill} r="64" />
      </g>
      <g id="icon">
        <path
          d="m57.831 70.1c8.79 8.79 17.405 12.356 20.508 9.253l4.261-4.26a7.516 7.516 0 0 1 10.629 0l9.566 9.566a7.516 7.516 0 0 1 0 10.629l-7.453 7.453c-7.042 7.042-27.87-2.358-47.832-22.319-9.976-9.981-16.519-19.382-20.748-28.222s-5.086-16.091-1.567-19.61l7.453-7.453a7.516 7.516 0 0 1 10.629 0l9.566 9.563a7.516 7.516 0 0 1 0 10.629l-4.264 4.271c-3.103 3.1.462 11.714 9.252 20.5z"
          fill="#eeefee"
        />
      </g>
    </svg>
  );
}

export default Phone;
