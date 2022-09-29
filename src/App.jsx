import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [numbers, setNumbers] = useState([])
  const [starts, setStars] = useState([])
  
  const generateRandomNumbers = () => {
    setNumbers(Array(5).fill().map(() => Math.floor(Math.random() * 49 + 1)))
  }

  const generateRandomStars = () => {
    setStars(Array(2).fill().map(() => Math.floor(Math.random() * 9 + 1)))
  }
  
  // console.log(numbers)
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>EuroMillions Generator</h1>
      <div className="card">
        <button onClick={() => {generateRandomNumbers(), generateRandomStars()}}>
          Generate
        </button>
        <p>
          Numbers : {numbers.join(', ')} <br />
          Stars : {starts.join(', ')}
        </p>
      </div>
      <p className="read-the-docs">
        I hope this website will help you to win the lottery!
      </p>
    </div>
  )
}

export default App
