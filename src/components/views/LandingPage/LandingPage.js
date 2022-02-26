import React, { useState } from 'react'
import './LandingPage.css';


function LandingPage() {
  const [Value, setValue] = useState([])

  const handleChange = e => {
    const { maxLength, value } = e.target;
    if (value.length >= maxLength) {
      e.target.nextSibling.focus();
    }
    if (e.key === 'Enter') {
      e.target.previousSibling.focus();
      console.log("delete");
    }
  }

  const clickResult = () => {
    
  }

  return (
    <div className='app'>
      <input maxLength={1} onChange={handleChange}></input>
      <input maxLength={1} onChange={handleChange}></input>
      <input maxLength={1} onChange={handleChange}></input>
      <input maxLength={1} onChange={handleChange}></input>
      <input maxLength={1} onChange={handleChange}></input>

      <div>
        <button onClick={clickResult}>결과</button>
      </div>

    </div>
  )
}

export default LandingPage