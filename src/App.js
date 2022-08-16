import React from "react";
import { ReactDOM } from "react";
import TheHome from "./views/Home/TheHome";

let msg = 'Hello, W orld!';
class App extends React.Component {

  render() {
    return (
      <TheHome />
    )
  }
}

export default App