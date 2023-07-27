import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  let title = "Counter App With Typescript";
  return (
    <div>
      <Counter title={title} />
    </div>
  );
}

export default App;
