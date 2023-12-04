import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Card
      title="Card with Image and Button"
      description="This card has an image and a button."
      imageUrl="img"
      buttonUrl="#"
      buttonText="Go somewhere"
    />

    <Card
      title="Card without Image"
      description="This card doesn't have an image."
    />

    <Card
      title="Card without Button"
      description="This card doesn't have a button."
      imageUrl="img"
    />
  </div>
  )
}

export default App
