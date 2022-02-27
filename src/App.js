import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

const App = () => {

  const [advice, setAdvice] = useState('')

  useEffect(() => {
    fetchRandomAdvice()
  }, [])

  const fetchRandomAdvice = () => {
    axios.get('https://api.adviceslip.com/advice').then((response) => {
      console.log(response.data.slip)
      setAdvice(response.data.slip)
    })
  }


  return (
    <div className="main">
      <div className="middleContainer">
        <div className="header">
          ADVICE #{advice.id}
        </div>

        <div className="adviceText">"{advice.advice}"</div>

        <div className="pauseContainer">
          <i class="fas fa-pause"></i>
        </div>

        <button className="randomButton" onClick={fetchRandomAdvice}>
          <i class="fas fa-dice-five"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
