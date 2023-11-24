import { useState } from 'react'
import './App.css'
import Portfolio from './components/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Portfolio />
    </div>
  );
}

export default App;
