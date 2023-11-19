import './App.css';
import BuggyCounter from './Components/BuggyCounter.js';
import ErrorBoundary from './Components/ErrorBoundary.js';
import Child from './Components/Child.js';

import Color from './Components/Color.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <ErrorBoundary>
          <BuggyCounter/>
          <BuggyCounter/>
        </ErrorBoundary>

        <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary>

        <BuggyCounter/> */}

      <Color>
        <Child/>
      </Color>
      </header>
    </div>
  );
}

export default App;
