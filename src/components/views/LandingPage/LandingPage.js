import React, { useState } from 'react'
import './LandingPage.css';
import WordChecking from '../WordChecking/WordChecking';

function LandingPage() {
  const [Value, setValue] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  });

  const handleChange = e => {
    const { maxLength, value } = e.target;
    if (value.length >= maxLength) {
      e.target.nextSibling.focus();
    }
    setValue({ ...Value, [e.target.name]: value});
  }

  const checkKeyPress = e => {
<<<<<<< HEAD
    if (e.keyCode === 8 && e.target.value.length <= 0) {
=======
    const { maxLength, value } = e.target;
    if (e.keyCode === 8 && value.length <= 0) {
      console.log(value.length);
>>>>>>> f914da9ef61c76ac3f3f84e471bc0fe825fba6d1
      e.target.previousSibling.focus();
    } else if (e.key === 'Enter') {
      console.log(Value);
      alert("Result!");
    }
  }

  const clickResult = () => {
    console.log(Value);
    <WordChecking />
  }

  return (
    <div className='app'>
      <input name='1' maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress}></input>
      <input name='2' maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress}></input>
      <input name='3' maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress}></input>
      <input name='4' maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress}></input>
      <input name='5' maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress}></input>

      <div>
        <button onClick={clickResult}>결과</button>
      </div>

    </div>
  )
}

export default LandingPage