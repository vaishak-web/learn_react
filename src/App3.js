import "./App.css";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
