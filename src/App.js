import logo from './logo.svg';
import './App.css';
import Animals from "./First/list";
import AnimalsCounter from "./First/AnimalsCounter";
import animals from "./First/list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AnimalsCounter animals={animals}/>
      </header>
    </div>
  );
}

export default App;
