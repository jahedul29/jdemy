import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div>
      <nav className="d-flex align-items-center fixed">
        <img src={props.logo} alt="" />
        &nbsp; &nbsp; &nbsp; &nbsp;
        <p>Categories</p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <p>Jdemy for business</p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <p>Teach on Jdemy</p>
      </nav>
    </div>
  );
};

export default Header;
