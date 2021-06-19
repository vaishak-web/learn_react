import "./App.css";
import { Component } from "react";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import FunctionalClick from "./components/FunctionalClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import './components/appStyles.css';
import styles from './components/appStyles.module.css'
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <h1 className="error">Error</h1>
        <h1 className={styles.error}>Error</h1>
        <Stylesheet primary={true}/>
        <Inline/>
        <Counter addValue={1} />
        <Greet name="Vaishak" heroName="SuperMan" />
        <Welcome  name="Vaishak" heroName="SuperMan" />
        <FunctionalClick />
        <ClassClick />
        <EventBind />
        <ParentComponent />
        <UserGreeting />
        <NameList />
         
      </div>
    );
  }
}

export default App;
