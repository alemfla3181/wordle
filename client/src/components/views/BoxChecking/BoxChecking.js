import React, { useState } from 'react'
import './BoxChecking.css';
import source from '../../source/Source';
import *as WordChecking from '../WordChecking/WordChecking.js';

function BoxChecking(props) {
  const [BoxColor, setBoxColor] = useState([]); 
  const [Value, setValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [WordCheck, setWordCheck] = useState(false);
  const answerResult = ['', 'a', 'm', 'e', 'n', 'd']

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

  // 결과 버튼 클릭
  const buttonClick = () => { 
    clickResult();
  }

  // 정답 확인
  const clickResult = () => {
    
    for (let i = 1; i <= 5; i++) {
      if (Value[i] === undefined || Value[i] === '') {
        alert('Full all!!!!');
        return 0;
      }
    }
    WordChecking.f1(Value).then(e => {
      if(e) {
        frontValue(Value);
        setIsDisabled(props.Disabled);
      } else {
        alert('Not Word!!!!');
        return 0;
      }  
    });
  }

  const frontValue = e => {
    let array = ['']; // 0은 공백 1부터 시작
    for (let i = 1; i <= 5; i++){
      if (answerResult.includes(e[i])) {
        array[i] = 'yellow';
      } else {
        array[i] = 0;
      }
      if (e[i] === answerResult[i]) {
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

      <div>
        <button onClick={buttonClick} disabled={isDisabled}>결과</button>
      </div>
    </div>
    
  )
}

export default BoxChecking