import React, { useState } from "react";
import Modal from "../Modal";
import Text from "../Text";
import "./Hobbies.css";

function Hobbies({ name, description, image }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Text
        text={name}
        onClick={() => setShow(true)}
        cursor="pointer"
        fontSize={20}
        fontWeight={500}
      />
      <Modal title={name} show={show} onClose={() => setShow(false)}>
        <Text text={description} />
        <img src={image} alt="" className="hobbyimg" width="60%" />
      </Modal>
    </div>
  );
}

export default Hobbies;
