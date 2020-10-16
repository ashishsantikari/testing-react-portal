import React from 'react';
import './App.css';
import DummyPortal from "./TestPortal";

function App() {
  return (
    <div className="App">
        <p>
            How to test? <br/>
            Open Dev Tools and locate the popover element in the DOM.
        </p>
      <DummyPortal renderInPortal={false}/>
      <DummyPortal renderInPortal/>
    </div>
  );
}

export default App;
