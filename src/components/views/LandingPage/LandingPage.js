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

  return (
    <div>
      <input maxLength={1} onChange={handleChange}></input>
      <input maxLength={1} onChange={handleChange}></input>
      <input maxLength={1} onChange={handleChange}></input>
      <input maxLength={1} onChange={handleChange}></input>
      <input maxLength={1} onChange={handleChange}></input>

    </div>
  )
}

export default LandingPage