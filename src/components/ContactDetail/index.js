import React from "react";
import Icon from "../Icon/icon";
import Text from "../Text";
import "./ContactDetail.css";

function ContactDetail({ icon, title, content, link, href }) {
  return (
    <div className="contactDetail">
      <Icon icon={icon} />
      <div className="contactContent">
        <Text text={`${title}:`} fontWeight="bold" />
        {link ? (
          <a href={href} target="_blank" rel="noreferrer" className="link">
            {link}
          </a>
        ) : (
          <Text text={content} />
        )}
      </div>
    </div>
  );
}

export default ContactDetail;
