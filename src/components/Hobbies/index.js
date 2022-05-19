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
      />
      <Modal title={name} show={show} onClose={() => setShow(false)}>
        <Text text={description} />
        <img
          src={
            image ||
            "https://cdn.shopify.com/s/files/1/0506/0316/3824/t/6/assets/placeholder_2048x.png?v=113555733946226816651623079373"
          }
          alt=""
          className="hobbyimg"
          width="60%"
        />
      </Modal>
    </div>
  );
}

export default Hobbies;
