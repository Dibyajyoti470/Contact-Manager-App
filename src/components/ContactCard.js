import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
      <i
        className="right floated trash alternate outline icon"
        style={{ color: "red", marginTop: "10px", cursor: "pointer" }}
        onClick={() => props.clickHandler(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
        <i
          className="right floated edit alternate outline icon"
          style={{
            color: "purple",
            marginTop: "10px",
            marginRight: "15px",
            cursor: "pointer",
          }}
        ></i>
      </Link>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `/contact/$(id)`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
