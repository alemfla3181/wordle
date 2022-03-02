import React, { useState } from 'react'
import './BoxChecking.css';

function WordChecking(props) {
  const [BoxColor, setBoxColor] = useState([]); 
  const [Value, setValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const result = ['', 'a', 'p', 'p', 'l', 'e']

  const handleChange = e => {
    const { maxLength, value } = e.target;
    if (value.length >= maxLength && e.target.nextSibling !== null) {
      e.target.nextSibling.focus();
    }
    setValue({ ...Value, [e.target.name]: value });
  }

  const checkKeyPress = e => {
    if (e.keyCode === 8 && e.target.value.length <= 0 && e.target.previousSibling !== null) {
      e.target.previousSibling.focus();
    } else if (e.key === 'Enter') {
      clickResult();
    }
  }

  const clickResult = () => {
    // console.log(Value);
    for (let i = 1; i <= 5; i++) {
      if (Value[i] === undefined || Value[i] === '') {
        alert('Full all!!!!');
        return 0;
      }
    }
    frontValue(Value);
    setIsDisabled(props.Disabled);
  }

  const frontValue = e => {
    let array = ['']; // 0은 공백 1부터 시작
    for (let i = 1; i <= 5; i++){
      if (result.includes(e[i])) {
        array[i] = 'yellow';
      } else {
        array[i] = 0;
      }
      if (e[i] === result[i]) {
        array[i] = 'green';
      }
    }
    setBoxColor(array);
    props.result();
  }

  return (
    <div>
      <input name='1' className={BoxColor[1]} maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress} disabled={isDisabled} autoFocus ></input>
      <input name='2' className={BoxColor[2]} maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress} disabled={isDisabled}></input>
      <input name='3' className={BoxColor[3]} maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress} disabled={isDisabled}></input>
      <input name='4' className={BoxColor[4]} maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress} disabled={isDisabled}></input>
      <input name='5' className={BoxColor[5]} maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress} disabled={isDisabled}></input>
    </div>
  )
}

export default WordChecking