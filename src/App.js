import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet name="Bruce" heroName="Batman">
          <p>Hello how ru???</p>
          <textarea></textarea>
        </Greet>
        <Greet name="Clark" heroName="Superman"/>
        <Greet name="Diana" heroName="Wonder Women"/>
        <Welcome name="James" heroName="Iron Man"/>
      </header>
    </div>
  );
}

export default App;
