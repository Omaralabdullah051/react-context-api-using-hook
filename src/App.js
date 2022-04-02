import { useState } from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import Content from './components/Content';
import Section from './components/Section';
import React, { createContext } from 'react';

export const CounterContext = createContext();

function App() {
  const [count2, setCount2] = useState(0);

  const handleEvent = () => setCount2((prevState) => (prevState + 1));

  return (
    <div className="App">
      {/* render props pattern  */}
      <Content>
        {(count, handleEvent) => <ClickCounter count={count} handleEvent={handleEvent} />}
      </Content>


      {/* context API pattern  */}
      <CounterContext.Provider value={[count2, handleEvent]}>
        <Section></Section>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
