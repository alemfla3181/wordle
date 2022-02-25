import React, { useState } from 'react'
import './LandingPage.css';


function LandingPage() {
  const [Value, setValue] = useState([])

  const handleChange = e => {
    const { maxLength, value } = e.target;
    if (value.length >= maxLength) {
      const nextSibling = document.querySelector(
        "input");
      console.log(document.querySelector(`input[name=n-${1}]`));
      if (nextSibling !== null)
        nextSibling.focus();
    }
  }

  return (
    <div>
      <input name='n-1' maxLength={1} onChange={handleChange}></input>
      <input name='n-2' maxLength={1} onChange={handleChange}></input>
      <input name='n-3' maxLength={1} onChange={handleChange}></input>
      <input name='n-4' maxLength={1} onChange={handleChange}></input>
      <input name='n-5' maxLength={1} onChange={handleChange}></input>

    </div>
  )
}

export default LandingPage