import React from "react";
import "../../index.css";

const UserInput = (props) => {
  return (
    <>
      <input
        className="userInput"
        onChange={props.changed}
        value={props.currentName}
      />
    </>
  );
};

export default UserInput;
