import React from "react";
import "../../index.css";

const UserOutput = (props) => {
  return (
    <div className="myDiv">
      <p className="myP">Hi universe!</p>
      <p className="myName">
        Here's:<span className="mySpan">{props.userName}</span>
      </p>
    </div>
  );
};

export default UserOutput;
