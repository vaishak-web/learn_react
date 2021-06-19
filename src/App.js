import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import PropsE from './components/PropsE';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome /> */}
      {/* <Hello /> */}
      <PropsE name="Vaishak" heroName="apple">
        <p>This is children block</p>
      </PropsE>
      <PropsE name="Vaishak1" heroName="banana">
      <button>Butaaaa</button>
      </PropsE>
      <PropsE name="Vaishak2" heroName="mango"/>
      <PropsE name="Vaishak3" heroName="chicku"/>
    </div>
  );
}

export default App;
