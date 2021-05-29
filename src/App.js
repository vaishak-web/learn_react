import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import PropsE from "./components/PropsE";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        
        <Hello />
        <PropsE name="Vaishak" heroName="apple">
          <p>This is children block</p>
        </PropsE>

        <Welcome name="Vaishak3" heroName="chicku" />
      </div>
    );
  }
}

export default App;
