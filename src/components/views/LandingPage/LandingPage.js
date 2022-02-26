import React, { useState } from 'react'
import './LandingPage.css';


function LandingPage() {
  const [Value, setValue] = useState([])

  const handleChange = e => {
    const { maxLength, value } = e.target;
    if (value.length >= maxLength) {
      e.target.nextSibling.focus();
    }
  }

  const checkKeyPress = e => {
    if (e.keyCode === 8) {
      e.target.previousSibling.focus();
    } else if (e.key === 'Enter') {
      alert("Result!");
    }
      
  }

  const clickResult = () => {
    
  }

  return (
    <div className='app'>
      <input maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress}></input>
      <input maxLength={1} onChange={handleChange} onKeyPress={checkKeyPress}></input>
      <input maxLength={1} onChange={handleChange} onKeyPress={checkKeyPress}></input>
      <input maxLength={1} onChange={handleChange} onKeyPress={checkKeyPress}></input>
      <input maxLength={1} onChange={handleChange} onKeyPress={checkKeyPress}></input>

      <div>
        <button onClick={clickResult}>결과</button>
      </div>

    </div>
  )
}

export default LandingPage