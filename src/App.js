import "./App.css";
import { Component } from "react";
import ClicCounter from "./components/ClicCounter";
import HoverCounter from "./components/HoverCounter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <ClicCounter />
        <HoverCounter />
        <p>Click Counter & Hover Counter using same counter functionality</p>
      </div>
    );
  }
}

export default App;
