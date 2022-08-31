import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import StateDemo from './components/StateDemo';
import Welcome from './components/Welcome';
import ParentComponent from './components/ParentComponent'
import Form from './components/Form'
import ConditionalRendering from './components/ConditionalRendering'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greet name="Bruce" heroName="Batman">
          <p>Hello how ru???</p>
          <textarea></textarea>
        </Greet>
        <Greet name="Clark" heroName="Superman"/>
        <Greet name="Diana" heroName="Wonder Women"/>
        <Welcome name="James" heroName="Iron Man"/> */}

        {/* <StateDemo/> */}

        {/* <Counter/> */}

        {/* <ParentComponent /> */}

        {/* <ConditionalRendering/> */}
        <Form/>
      </header>
    </div>
  );
}

export default App;
