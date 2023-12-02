import { useState } from 'react'
import WorkoutTracker from './componetns/WorkoutTracker'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WorkoutTracker />
    </>
  )
}

export default App
