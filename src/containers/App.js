import React, { useState } from "react";
import "./App.css";
import UserOutPut from "../components/UserOutput/UserOutput";
import UserInput from "../components/UserInput/UserInput";
/* class App extends Component {
  state = {
    username: "Cia",
  };

  usernameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutPut userName={this.state.username} />
        <UserOutPut userName={this.state.username} />
        <UserOutPut userName={this.state.username} />
        <UserOutPut userName="Marti4n" />
      </div>
    );
  }
} */

const App = () => {

  const [state, setState] = useState("Cia")
  
  
  const usernameChangedHandler = (event) => {
    return setState(event.target.value) ;
  };


  return ( <>
   <div className="App">
        <UserInput
          changed={usernameChangedHandler}
          currentName={state}
        />
        <UserOutPut userName={state} />
        <UserOutPut userName={state} />
        <UserOutPut userName={state} />
        <UserOutPut userName="Marti4n" />
      </div>
  </> );
}
 
export default App;

