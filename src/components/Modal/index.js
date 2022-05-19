import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Icon from "../Icon/icon";
import Text from "../Text";
import "./Modal.css";

function Modal(props) {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  return (
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div
        className={`modal ${props.show ? "show" : ""}`}
        onClick={props.onClose}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <Text
              className="modal-title"
              text={props.title}
              fontSize={20}
              color="white"
            />
            <Icon
              icon="close"
              width={16}
              height={16}
              onClick={props.onClose}
              fill="white"
            />
          </div>
          <div className="modal-body">{props.children}</div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Modal;
