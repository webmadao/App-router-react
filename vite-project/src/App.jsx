import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1>Page d'accueil</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint possimus ex illum et. Sunt, eum?</p>
    </div>
  )
}

export default App
