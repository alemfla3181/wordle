import React, { useState } from 'react'

function WordChecking(props) {
  const [Value, setValue] = useState("");

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
    // console.log(Value);
    return props.propValue(Value);
  }

  return (
    <div>
      <input name='1' maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress}></input>
      <input name='2' maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress}></input>
      <input name='3' maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress}></input>
      <input name='4' maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress}></input>
      <input name='5' maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress}></input>
    </div>
  )
}

export default WordChecking