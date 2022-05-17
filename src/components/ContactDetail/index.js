import React from "react";
import Icon from "../Icon/icon";
import Text from "../Text";
import "./ContactDetail.css";

function ContactDetail({ icon, title, content }) {
  return (
    <div className="contactDetail">
      <Icon icon={icon} />
      <div className="contactContent">
        <Text text={`${title}:`} fontWeight="bold" />
        <Text text={content} />
      </div>
    </div>
  );
}

export default ContactDetail;
