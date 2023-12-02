import React, { useState } from 'react';
import './App.css';
import ColorConverter from './components/ColorConverter';

const App: React.FC = () => {
  return (
    <div className="App">
      <ColorConverter />
    </div>
  );
}

export default App;
