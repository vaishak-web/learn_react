import "./App.css";
import { Component } from "react";
import ClicCounter from "./components/ClicCounter";
import HoverCounter from "./components/HoverCounter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClicCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
