import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import StateDemo from './components/StateDemo';
import Welcome from './components/Welcome';
import ParentComponent from './components/ParentComponent'
import Form from './components/Form'
import ConditionalRendering from './components/ConditionalRendering'
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import Hero from './Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import HttpDemo from './components/HttpDemo';
import PostForm from './components/PostForm';
import HooksCounter from './hooks/HooksCounter';
import HookCounterTwo from './hooks/HookCounterTwo';
import UseEffectDemo from './hooks/UseEffectDemo';
import HookMouse from './hooks/HookMouse';
import MouseContainer from './hooks/MouseContainer';

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
        {/* <Form/> */}

        {/* <ParentComp /> */}

        {/* <RefsDemo /> */}
        
        {/* <ErrorBoundary>
         <Hero heroName="Batman"/>
        </ErrorBoundary>
        
        <ErrorBoundary>
         <Hero heroName="Superman"/>
        </ErrorBoundary>
        
        <ErrorBoundary>
         <Hero heroName="Joker"/>
        </ErrorBoundary> */}


        {/* <ClickCounter></ClickCounter>
        <HoverCounter /> */}

        {/* <HttpDemo /> */}
        {/* <PostForm/> */}
        {/* <HooksCounter/> */}
        {/* <HookCounterTwo /> */}
        {/* <UseEffectDemo/> */}

        {/* <HookMouse /> */}
        <MouseContainer/>
      </header>
    </div>
  );
}

export default App;
