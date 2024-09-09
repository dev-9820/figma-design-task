import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Causes from "./components/Causes";

function App() {
  return (
      <div className="App">
        <Header />
        <Hero />
        <Stats />
          <Causes/>
      </div>
  );
}

export default App;
