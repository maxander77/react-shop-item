import { useState } from 'react'
import Listing from './components/Listing'
import './components/listing.css'
import './App.css'
import itemsData from './components/data.json'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>c
      <h1>Listing App</h1>
      <Listing items={itemsData} />
    </div>
  );
};

export default App
