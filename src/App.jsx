import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [numbers, setNumbers] = useState([])
  const [stars, setStars] = useState([])

  let randomNumbers = []; // this arrays holds the five random numbers generated;
  let randomStars = []; // holds two random starts

  //Generate random number between 1 to 49
  const genNum = Math.floor(Math.random() * 49 + 1);
  //Generate random number between 1 to 9
  const genStar = Math.floor(Math.random() * 9 + 1);


  const generate = () => {
    randomNumbers.push(genNum);
    randomStars.push(genStar);    

    //4 random numbers 
    for (let counter = 0; counter < 4; counter++) {
      //the counter is less than four because we already initialise randomNumbers[0] with genNum
      let newGen = Math.floor(Math.random() * 49 + 1);
      while (randomNumbers.lastIndexOf(newGen) !== -1) {
        newGen = Math.floor(Math.random() * 49 + 1);
      }
      randomNumbers.push(newGen);
    }
    //1 random number
    for (let counter = 0; counter < 1; counter++) {
      //the counter is less than four because we already initialise randomNumbers[0] with genNum
      let newGen = Math.floor(Math.random() * 9 + 1);
      while (randomStars.lastIndexOf(newGen) !== -1) {
        newGen = Math.floor(Math.random() * 9 + 1);
      }
      randomStars.push(newGen);
    }        
    setNumbers(randomNumbers);
    setStars(randomStars);
  };

  

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
        <button onClick={() => {generate()}}>
          Generate
        </button>
        <p>
          Numbers : {numbers.join(', ')} <br />
          Stars : {stars.join(', ')}
        </p>
      </div>
      <p className="read-the-docs">
        I hope this website will help you to win the lottery!
      </p>
    </div>
  )
}

export default App