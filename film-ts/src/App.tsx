import  React from 'react';
import './App.css'
import Stars from './components/Stars'

function App() {


  return (
    <div className="app">
      <h1>Movie Rating</h1>
      <Stars count={1} />
      <Stars count={2} />
      <Stars count={3} />
      <Stars count={4} />
      <Stars count={5} />
    </div>
  );
}

export default App
