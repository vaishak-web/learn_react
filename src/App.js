import "./App.css";
import { Component } from "react";
import ClicCounter from "./components/ClicCounter";
import HoverCounter from "./components/HoverCounter";
import ClicCounter2 from "./components/ClicCounter2";
import HoverCounter2 from "./components/HoverCounter2";
import User from "./components/User";
import Counter2 from "./components/Counter2";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        {/* <ClicCounter />
        <HoverCounter />
        <p>Click Counter & Hover Counter using same counter functionality</p>
        <ClicCounter2 />
        <HoverCounter2 />
        <User render={(isLoggedIn) => isLoggedIn ? 'vaky' : 'guest'}/>   */}
        {/* <Counter2
          render={(count, incrementCount) => (
            <ClicCounter2 count={count} incrementCount={incrementCount} />
          )}
        />
        <Counter2
          render={(count, incrementCount) => (
            <HoverCounter2 count={count} incrementCount={incrementCount} />
          )}
        /> */}
        <UserProvider value="Vaishak">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default App;
