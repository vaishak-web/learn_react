import "./App.css";
import { Component } from "react";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import FunctionalClick from "./components/FunctionalClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter addValue={1} />
        <Greet name="Vaishak" heroName="SuperMan" />
        <Welcome  name="Vaishak" heroName="SuperMan" />
        <FunctionalClick />
        <ClassClick />
        <EventBind />
        <ParentComponent />
      </div>
    );
  }
}

export default App;
