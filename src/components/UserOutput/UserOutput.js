import React, { useState } from "react";
import "../../index.css";

const UserOutput = (props) => {

  const [show, setShow] = useState(true)

  if(!show) {
    return null;
  }

  const closeBtn = () => {
    setShow(false)
  }

  return (
    <div className="myDiv">
      <p className="myP">Hi universe!</p>
      <span className="span" onClick={closeBtn}>X</span>
      <p className="myName">
        Here's:<span className="mySpan">{props.userName}</span>
      </p>
    </div>
  );
};

export default UserOutput;
