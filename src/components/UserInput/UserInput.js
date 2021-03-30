import React from "react";

const UserInput = (props) => {
    return ( 
        <>
        <input
        onChange={props.changed}
        value={props.currentName}
        />
        </>
     );
}
 
export default UserInput;