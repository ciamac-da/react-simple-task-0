import React from "react";

const UserOutput = (props) => {
    return ( 
        <>
        <p>Hi universe!</p>
        <p>Here's: {props.userName}</p>
        </>
     );
}
 
export default UserOutput;