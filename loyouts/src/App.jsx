import { useState } from 'react'
import './App.css'
import Store from './components/Store';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Store />
    </div>
  )

}

export default App
